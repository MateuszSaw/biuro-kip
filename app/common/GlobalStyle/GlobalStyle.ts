import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
     scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }

  .no-scroll {
    overflow-y: hidden!important;
  }
`
export default GlobalStyle
