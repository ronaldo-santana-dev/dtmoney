import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    // System Colors :)
    --background: #f0f2f5;
    --red: #e52e4D;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-tittle: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'poppins',sans-serif;
    font-weight: 400;
  }

  h1, h2, h3,h4,h5,h6, strong {
    font-weight: 600;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }




`