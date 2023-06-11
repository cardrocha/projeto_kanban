import * as S from './styles'

const CardContainer = () => (
  <S.ContainerGrid>
    <S.CardToDo>
      <h2>To do</h2>
      <p>Nenhum card adicionado</p>
      <button>Adicionar outro card +</button>
    </S.CardToDo>
    <S.CardDoing>
      <h2>In Progress</h2>
      <p>Nenhum card adicionado</p>
      <button>Adicionar outro card +</button>
    </S.CardDoing>
    <S.CardDone>
      <h2>Complete</h2>
      <p>Nenhum card adicionado</p>
      <button>Adicionar outro card +</button>
    </S.CardDone>
  </S.ContainerGrid>
)

export default CardContainer
