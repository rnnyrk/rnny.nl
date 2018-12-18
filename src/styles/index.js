import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: ${theme.black};
    background: ${theme.white.off};

    &.scrolled {
      padding-top: 100px;
    }
  }
`;
