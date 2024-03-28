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
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  ul {
    list-style-type: none;
  }
  
  section :nth-child(odd){
    background-color: ${Theme.colors.primaryBg};
  }
  
  section :nth-child(even){
    background-color: ${Theme.colors.secondaryBg};
  }
`