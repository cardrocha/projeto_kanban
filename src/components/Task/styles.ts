import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerTask = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  margin-top: 10px;
`
export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const IconBox = styled.div`
  display: flex;
  gap: 4px;
  font-size: 18px;
  cursor: pointer;
  color: ${colors.darkenBlue};
`

export const InputTask = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
`
