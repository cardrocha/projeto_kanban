import * as S from './styles'
import * as R from 'react-icons/ri'

type Props = {
  description: string
  onDelete: () => void
  editTask: () => void
  reverseTask: () => void
  moveToCard: () => void
}

const Task = ({
  description,
  onDelete,
  editTask,
  reverseTask,
  moveToCard
}: Props) => {
  return (
    <>
      <S.ContainerTask>
        <S.TaskContent>
          <S.InputTask type="text" value={description} readOnly={true} />
          <S.IconBox>
            <R.RiCheckboxFill title="edite a tarefa" onClick={editTask} />
            <R.RiCodeLine title="mova a tarefa" onClick={moveToCard} />
            <R.RiArrowUpFill title="priorize a tarefa" onClick={reverseTask} />
            <R.RiDeleteBinFill title="remova a tarefa" onClick={onDelete} />
          </S.IconBox>
        </S.TaskContent>
      </S.ContainerTask>
    </>
  )
}

export default Task
