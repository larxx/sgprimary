import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #5ebaf2;
    --color-primary-darker: #28a3ee;
    --color-accent: #fe87af;
    --color-pale-yellow: #fccf93;
    --text: #333333;
    --white: #ffffff;
    --offwhite: #efefef;
    --fw-normal: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;
    --fw-xbold: 800;
  }

  html {
    height: 100%;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    height: 100%;
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  h1, h2, h3, h4, h5 {
    color: var(--text);
    line-height: 1.25;
    font-family: 'Quicksand';
  }

  p {
    color: var(--text);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: var(--text);
  }
`

export default GlobalStyles
