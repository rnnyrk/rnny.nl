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
    line-height: 27px;
    font-family: 'Poppins', sans-serif;
    color: ${theme.black};

    &.scrolled {
      padding-top: 100px;
    }
  }

  .page {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.5s ease-out,
                box-shadow 0.5s ease-out;
  }

  .page-enter {
    transform: translate(-100%, 0);
  }

  .page-enter-active {
    transform: translate(0, 0);
  }

  .page-exit {
    box-shadow: 0 0 5em 0 rgba(0, 0, 0, 0.5) inset;
    transform: translate(-100%, 0);
  }

  .page--prev.page-enter {
    transform: translate(100%, 0);
  }

  .page--prev.page-enter-active {
    transform: translate(0, 0);
  }

  .page--prev.page-exit {
    transform: translate(100%, 0);
  }

  .page-exit .page__inner {
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  }
`;
