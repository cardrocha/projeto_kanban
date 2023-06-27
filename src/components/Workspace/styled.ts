import styled from 'styled-components'
import { colors } from '../../styles'

export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 800px;
  gap: 20px;
  padding: 8px;
  margin: 0 auto;
`

export const Title = styled.h1`
  padding: 30px;
  text-align: center;
  z-index: 1;

  span {
    background-color: ${colors.white};
    padding: 4px 16px 4px 16px;
    border-radius: 6px;
  }
`
