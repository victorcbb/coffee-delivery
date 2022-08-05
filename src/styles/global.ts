import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  input:focus {
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

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme["gray-200"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.purple}
  }
`
