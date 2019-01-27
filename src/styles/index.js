import { createGlobalStyle } from 'styled-components';
<<<<<<< HEAD

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

=======
import theme from './theme';

export default createGlobalStyle`
>>>>>>> 273ce95dea39f70236f4d432aa0bd7f0d65f0d87
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

<<<<<<< HEAD
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
=======
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
>>>>>>> 273ce95dea39f70236f4d432aa0bd7f0d65f0d87
  }
`;
