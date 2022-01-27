import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    min-heigh: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
  }

  #app {
    height: 100%;
    min-heigh: 100%;
  }

  p,
  label {
    font-family: 'Source Code Pro', monospace;
    line-height: 1.5em;
  }

  button {
    font-family: inherit;
  }

  a,
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
