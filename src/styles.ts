import { createGlobalStyle } from 'styled-components'

export const colors = {
  cian: '#22A699',
  orange: '#F29727',
  red: '#F24C3D',
  white: '#fff',
  black: '#000'
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export default GlobalStyle
