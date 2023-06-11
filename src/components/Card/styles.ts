import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`

export const CardToDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.cian};

  border: none;

  h2 {
    color: ${colors.white};
  }

  p {
    color: ${colors.black};
  }
`

export const CardDoing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.orange};

  border: none;

  h2 {
    color: ${colors.white};
  }

  p {
    color: ${colors.black};
  }
`
export const CardDone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.red};

  border: none;

  h2 {
    color: ${colors.white};
  }

  p {
    color: ${colors.black};
  }
`
