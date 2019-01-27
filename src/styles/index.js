import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:400,700');

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
    font-size: 20px;
    line-height: 30px;
    font-family: ${theme.font.sans};
    color: ${theme.black};

    &.scrolled {
      padding-top: 100px;
    }
  }
`;
