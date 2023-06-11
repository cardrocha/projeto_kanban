import CardContainer from '../Card'
import * as S from './styled'

const ContainerWorkSpace = () => (
  <div className="container">
    <S.Title>
      <span>Projeto Kanban</span>{' '}
    </S.Title>
    <S.ContainerWorkSpace>
      <CardContainer />
    </S.ContainerWorkSpace>
  </div>
)

export default ContainerWorkSpace
