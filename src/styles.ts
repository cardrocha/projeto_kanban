import { createGlobalStyle } from 'styled-components'
import work from './assets/workSpace.jpg'

export const colors = {
  cian: '#22A699',
  darkerCyan: '#15777D',
  orange: '#F29727',
  darkerOrange: '#8C4E1D',
  red: '#F24C3D',
  darkerRed: '#9D281F',
  white: '#fff',
  black: '#000',
  gray: '#DDE6ED'
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-image: url(${work});
    background-size: cover;
    z-index: 0;

    &::after {
    position: absolute;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.3;
  }

  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export default GlobalStyle
