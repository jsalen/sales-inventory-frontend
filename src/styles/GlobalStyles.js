import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Nunito, Ubuntu, 'Segoe UI', Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li, h1, h2, h3, h4, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
    font-family: Nunito, Ubuntu, 'Segoe UI', Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #d1d1f1;
    color: #9381FF;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
  }
`

export default GlobalStyles
