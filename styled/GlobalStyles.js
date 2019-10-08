import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
  width: calc(100vw - 4rem);
  max-width: ${props => props.theme.maxContainerSize};
  margin: auto;
  padding: 0 2rem;
  
  color: red;
  }
`

export default GlobalStyle;
