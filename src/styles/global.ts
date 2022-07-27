import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline:1px solid ${({ theme }) => theme["gray-400"]};
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme["gray-900"]};
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;    
    -webkit-font-smoothing: antialiased;
  }

  input::-webkit-input-placeholder {
   color: ${({ theme }) => theme["gray-400"]};
  }

  input:-moz-placeholder { /* Firefox 18- */
    color: ${({ theme }) => theme["gray-400"]};  
  }

  input::-moz-placeholder {  /* Firefox 19+ */
    color: ${({ theme }) => theme["gray-400"]};  
  }

  input:-ms-input-placeholder {  
    color: ${({ theme }) => theme["gray-400"]};  
  }
`
