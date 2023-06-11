import * as S from './styles'

const CardContainer = () => (
  <S.ContainerGrid>
    <S.CardToDo>
      <h2>To do</h2>
      <p>Nenhum card adicionado</p>
      <button>Adicionar outro card +</button>
    </S.CardToDo>
    <S.CardDoing>
      <h2>Doing</h2>
      <p>Nenhum card adicionado</p>
      <button>Adicionar outro card +</button>
    </S.CardDoing>
    <S.CardDone>
      <h2>Done</h2>
      <p>Nenhum card adicionado</p>
      <button>Adicionar outro card +</button>
    </S.CardDone>
  </S.ContainerGrid>
)

export default CardContainer
