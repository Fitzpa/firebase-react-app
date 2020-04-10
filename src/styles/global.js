import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
  
  strong {
    font-weight: bold;
  }
  
  button {
    background: transparent;
    border: 0;
  }
  
  a, button {
    cursor: pointer;
  }
  
  .cta-button {
    padding: 10px 20px;
    border-radius: 30px;
  }
  
  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
`