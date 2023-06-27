import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1152px;
  margin: 0 auto;
  gap: 60px;
  z-index: 0;
`

export const CardToDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: ${colors.cian};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
  padding: 8px;
  border-radius: 4px;
  border: none;
  z-index: 1;

  ul {
    width: 100%;
  }

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
  width: 100%;
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
  width: 100%;
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

export const ModalContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  text-align: start;
  top: 160px;
  left: 350px;
  width: 600px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
  padding: 20px;
  z-index: 2;

  &.visible {
    display: flex;
  }

  input {
    border: none;
    border-bottom: 1px solid ${colors.black};
    width: 100%;
    font-size: 18px;
    padding: 4px;
    outline: none;
  }
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button {
    font-size: 18px;
    font-weight: bold;
    padding: 8px 10px 8px 10px;
    border: none;
    background-color: transparent;
    color: ${colors.darkerCyan};
    cursor: pointer;
  }
`

export const ButtonTask = styled.div`
  display: flex;
  margin-bottom: 5px;
  gap: 2px;
`

export const OptionTask = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 200px;
  left: 570px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: ${colors.darkenBlue};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
  padding: 5px;
  width: 250px;
  border-radius: 5px;

  select {
    font-size: 14px;
    font-weight: bold;
    padding: 2px;

    option {
      font-weight: bold;
    }
  }

  &.visible {
    z-index: 3;
  }

  button {
    font-size: 18px;
    font-weight: bold;
    padding: 5px 10px 5px 10px;
    border: 1px solid ${colors.black};
    background-color: ${colors.white};
    border-radius: 5px;
    color: ${colors.black};
    cursor: pointer;
  }
`
