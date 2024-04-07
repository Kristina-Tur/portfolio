import {createGlobalStyle} from 'styled-components';
import {Theme} from './Theme';

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }
  
  section{
    padding: 70px 0;
  }
  
  section:nth-of-type(odd){
    background-color: ${Theme.colors.primaryBg};
  }
  
  section:nth-of-type(even){
    background-color: ${Theme.colors.secondary};
  }
`