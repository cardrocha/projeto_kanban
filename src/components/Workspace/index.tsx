import CardContainer from '../Card'
import * as S from './styled'

const ContainerWorkSpace = () => (
  <div className="container">
    <h1>Projeto Kanban</h1>
    <S.ContainerWorkSpace>
      <CardContainer />
    </S.ContainerWorkSpace>
  </div>
)

export default ContainerWorkSpace
