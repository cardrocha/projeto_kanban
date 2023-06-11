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
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
  padding: 8px;
  border-radius: 4px;
  z-index: 1;

  border: none;

  h2 {
    color: ${colors.white};
    padding: 8px 8px 8px 0;
  }

  p {
    color: ${colors.black};
  }

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 8px 10px 8px 10px;
    margin-top: 8px;
    border: none;
    background-color: ${colors.darkerCyan};
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
    color: ${colors.white};
    border-radius: 6px;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
      filter: brightness(1.2);
      scale: calc(0.96);
    }
  }
`

export const CardDoing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.orange};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 4px;
  z-index: 1;

  border: none;

  h2 {
    color: ${colors.white};
    padding: 8px 8px 8px 0;
  }

  p {
    color: ${colors.black};
  }

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 8px 10px 8px 10px;
    margin-top: 8px;
    border: none;
    background-color: ${colors.darkerOrange};
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
    color: ${colors.white};
    border-radius: 6px;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
      filter: brightness(1.2);
      scale: calc(0.96);
    }
  }
`
export const CardDone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.red};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 4px;
  z-index: 1;

  border: none;

  h2 {
    color: ${colors.white};
    padding: 8px 8px 8px 0;
  }

  p {
    color: ${colors.black};
  }

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 8px 10px 8px 10px;
    margin-top: 8px;
    border: none;
    background-color: ${colors.darkerRed};
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
    color: ${colors.white};
    border-radius: 6px;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
      filter: brightness(1.2);
      scale: calc(0.96);
    }
  }
`
