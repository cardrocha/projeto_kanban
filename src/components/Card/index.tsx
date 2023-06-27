import { FormEvent, useState, useEffect } from 'react'
import Task from '../Task'
import * as S from './styles'

type Task = {
  id: number
  description: string
}

const CardContainer = () => {
  const [toDoTasks, setToDoTasks] = useState<Task[]>([])
  const [doingTasks, setDoingTasks] = useState<Task[]>([])
  const [doneTasks, setDoneTasks] = useState<Task[]>([])
  const [description, setDescription] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [cardType, setCardType] = useState('')
  const [editTask, setEditTask] = useState(false)
  const [destinationCard, setDestinationCard] = useState('')
  const [openMovetask, setOpenMovetask] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [alertMessage, setAlertMessage] = useState('')

  const checkDuplicateTask = (task: Task) => {
    const allTasks = [...toDoTasks, ...doingTasks, ...doneTasks]
    const duplicateTask = allTasks.find(
      (t) => t.description === task.description
    )
    return duplicateTask !== undefined
  }

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    if (description.trim() !== '') {
      if (editTask && selectedTask) {
        const updatedTask = { ...selectedTask, description }

        if (cardType === 'toDo') {
          const updatedTasks = toDoTasks.map((task) =>
            task.id === selectedTask.id ? updatedTask : task
          )
          setToDoTasks(updatedTasks)
        } else if (cardType === 'doing') {
          const updatedTasks = doingTasks.map((task) =>
            task.id === selectedTask.id ? updatedTask : task
          )
          setDoingTasks(updatedTasks)
        } else if (cardType === 'done') {
          const updatedTasks = doneTasks.map((task) =>
            task.id === selectedTask.id ? updatedTask : task
          )
          setDoneTasks(updatedTasks)
        }
      } else {
        const newTask: Task = {
          id: Date.now(),
          description
        }

        if (cardType === 'toDo') {
          if (checkDuplicateTask(newTask)) {
            setAlertMessage('Essa tarefa já foi adicionada em outro card.')
          } else {
            setToDoTasks([...toDoTasks, newTask])
          }
        } else if (cardType === 'doing') {
          if (checkDuplicateTask(newTask)) {
            setAlertMessage('Essa tarefa já foi adicionada em outro card.')
          } else {
            setDoingTasks([...doingTasks, newTask])
          }
        } else if (cardType === 'done') {
          if (checkDuplicateTask(newTask)) {
            setAlertMessage('Essa tarefa já foi adicionada em outro card.')
          } else {
            setDoneTasks([...doneTasks, newTask])
          }
        }
      }

      setDescription('')
      setOpenModal(false)
      setEditTask(false)
      setSelectedTask(null)
      setCardType('')
    }
  }

  useEffect(() => {
    if (alertMessage !== '') {
      alert(alertMessage)
      setAlertMessage('')
    }
  }, [alertMessage])

  const moveTaskToCard = (task: Task, currentCard: string) => {
    setSelectedTask(task)
    setCardType(currentCard)
    setOpenMovetask(true)
  }

  const confirmMoveTask = () => {
    if (destinationCard === '') {
      return
    }

    const task = selectedTask ?? { id: 0, description: '' }

    if (cardType === 'toDo') {
      if (destinationCard === 'doing') {
        setDoingTasks([...doingTasks, task])
        setToDoTasks(toDoTasks.filter((t) => t.id !== task.id))
      } else if (destinationCard === 'done') {
        setDoneTasks([...doneTasks, task])
        setToDoTasks(toDoTasks.filter((t) => t.id !== task.id))
      }
    } else if (cardType === 'doing') {
      if (destinationCard === 'toDo') {
        setToDoTasks([...toDoTasks, task])
        setDoingTasks(doingTasks.filter((t) => t.id !== task.id))
      } else if (destinationCard === 'done') {
        setDoneTasks([...doneTasks, task])
        setDoingTasks(doingTasks.filter((t) => t.id !== task.id))
      }
    } else if (cardType === 'done') {
      if (destinationCard === 'toDo') {
        setToDoTasks([...toDoTasks, task])
        setDoneTasks(doneTasks.filter((t) => t.id !== task.id))
      } else if (destinationCard === 'doing') {
        setDoingTasks([...doingTasks, task])
        setDoneTasks(doneTasks.filter((t) => t.id !== task.id))
      }
    }

    setSelectedTask(null)
    setDestinationCard('')
    setOpenMovetask(false)
  }

  const cancelMoveTask = () => {
    setSelectedTask(null)
    setDestinationCard('')
    setOpenMovetask(false)
  }

  const changingOrder = (task: Task, cardType: string) => {
    if (cardType === 'toDo') {
      const updatedTasks = toDoTasks.map((t) => {
        if (t.id === task.id) {
          return task
        }
        return t
      })
      setToDoTasks(updatedTasks.reverse())
    } else if (cardType === 'doing') {
      const updatedTasks = doingTasks.map((t) => {
        if (t.id === task.id) {
          return task
        }
        return t
      })
      setDoingTasks(updatedTasks.reverse())
    } else if (cardType === 'done') {
      const updatedTasks = doneTasks.map((t) => {
        if (t.id === task.id) {
          return task
        }
        return t
      })
      setDoneTasks(updatedTasks.reverse())
    }
  }

  const editandoTarefa = (task: Task, currentCard: string) => {
    // setOriginalTask(task) // Guarda a tarefa original
    setSelectedTask(task)
    setDescription(task.description)
    setOpenModal(true)
    setEditTask(true)
    setCardType(currentCard)
  }

  useEffect(() => {
    if (selectedTask) {
      setEditTask(true)
    } else {
      setEditTask(false)
    }
  }, [selectedTask])

  const addAnotherTask = (type: string) => {
    setCardType(type)
    setOpenModal(true)
    setEditTask(false)
    setSelectedTask(null)
    setDescription('')
  }

  const deleteTask = (taskId: number, cardType: string) => {
    if (cardType === 'toDo') {
      setToDoTasks(toDoTasks.filter((t) => t.id !== taskId))
    } else if (cardType === 'doing') {
      setDoingTasks(doingTasks.filter((t) => t.id !== taskId))
    } else if (cardType === 'done') {
      setDoneTasks(doneTasks.filter((t) => t.id !== taskId))
    }
  }

  return (
    <>
      <S.Container>
        <S.CardToDo>
          <h2>To do</h2>
          {toDoTasks.length === 0 ? (
            <p>Nenhum card adicionado</p>
          ) : (
            toDoTasks.map((task) => (
              <Task
                key={task.id}
                description={task.description}
                onDelete={() => deleteTask(task.id, 'toDo')}
                editTask={() => editandoTarefa(task, 'toDo')}
                reverseTask={() => changingOrder(task, 'toDo')}
                moveToCard={() => moveTaskToCard(task, 'toDo')}
              />
            ))
          )}
          <button onClick={() => addAnotherTask('toDo')}>
            Adicionar outro card +
          </button>
        </S.CardToDo>
        <S.CardDoing>
          <h2>In Progress</h2>
          {doingTasks.length === 0 ? (
            <p>Nenhum card adicionado</p>
          ) : (
            doingTasks.map((task) => (
              <Task
                key={task.id}
                description={task.description}
                onDelete={() => deleteTask(task.id, 'doing')}
                editTask={() => editandoTarefa(task, 'doing')}
                reverseTask={() => changingOrder(task, 'doing')}
                moveToCard={() => moveTaskToCard(task, 'doing')}
              />
            ))
          )}
          <button onClick={() => addAnotherTask('doing')}>
            Adicionar outro card +
          </button>
        </S.CardDoing>
        <S.CardDone>
          <h2>Done</h2>
          {doneTasks.length === 0 ? (
            <p>Nenhum card adicionado</p>
          ) : (
            doneTasks.map((task) => (
              <Task
                key={task.id}
                description={task.description}
                onDelete={() => deleteTask(task.id, 'done')}
                editTask={() => editandoTarefa(task, 'done')}
                reverseTask={() => changingOrder(task, 'done')}
                moveToCard={() => moveTaskToCard(task, 'done')}
              />
            ))
          )}
          <button onClick={() => addAnotherTask('done')}>
            Adicionar outro card +
          </button>
        </S.CardDone>
      </S.Container>
      {openMovetask && (
        <S.OptionTask className={openMovetask ? 'visible' : ''}>
          <label htmlFor="destinationCard">Selecionar destino:</label>
          <select
            id="destinationCard"
            value={destinationCard}
            onChange={(event) => setDestinationCard(event.target.value)}
          >
            <option value="">Selecionar</option>
            {cardType === 'toDo' && (
              <>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </>
            )}
            {cardType === 'doing' && (
              <>
                <option value="toDo">To Do</option>
                <option value="done">Done</option>
              </>
            )}
            {cardType === 'done' && (
              <>
                <option value="toDo">To Do</option>
                <option value="doing">Doing</option>
              </>
            )}
          </select>
          <S.ButtonTask>
            <button onClick={cancelMoveTask}>Cancelar</button>
            <button onClick={confirmMoveTask} type="submit">
              Confirmar
            </button>
          </S.ButtonTask>
        </S.OptionTask>
      )}
      {openMovetask && <S.Overlay onClick={() => setOpenMovetask(false)} />}
      {openModal && (
        <S.ModalContainer className="visible">
          <h2>{editTask ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
          <form onSubmit={registerTask}>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              id="description"
            />
            <S.ButtonContainer>
              <button onClick={() => setOpenModal(false)}>Cancelar</button>
              <button type="submit">Confirmar</button>
            </S.ButtonContainer>
          </form>
        </S.ModalContainer>
      )}
      {openModal && <S.Overlay onClick={() => setOpenModal(false)} />}
    </>
  )
}

export default CardContainer
