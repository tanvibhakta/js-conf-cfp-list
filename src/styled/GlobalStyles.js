import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Heebo';
  src: url('../assets/fonts/Heebo-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'Heebo';
  src: url('../assets/fonts/Heebo-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Heebo';
  src: url('../assets/fonts/Heebo-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Heebo';
  src: url('../assets/fonts/Heebo-Regular.ttf') format('truetype');
}
  body {
  font-family: 'Heebo', sans-serif;
  width: calc(100vw - 4rem);
  max-width: ${props => props.theme.maxContainerSize};
  margin: auto;
  padding: 0 2rem;
  
  color: red;
  }
`

export default GlobalStyle;
