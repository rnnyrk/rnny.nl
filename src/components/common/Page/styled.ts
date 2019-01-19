import styled, { css } from 'styled-components';

export interface PageContainerInterface {
  variant?: string;
}

export const PageContainer = styled.section<PageContainerInterface>`
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.purple} 0%,
    ${(props) => props.theme.purple.dark} 100%
  );

  ${(props) => props.variant === 'white' && css`
    color: ${(props) => props.theme.black};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.white} 0%,
      ${(props) => props.theme.white.off} 100%
    );
  `}

  &.page {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.5s ease-out,
                box-shadow 0.5s ease-out;
  }

  &.page-enter {
    transform: translate(-100%, 0);
  }

  &.page-enter-active {
    transform: translate(0, 0);
  }

  &.page-exit {
    box-shadow: 0 0 5em 0 rgba(0, 0, 0, 0.5) inset;
    transform: translate(-100%, 0);
  }

  &.page--prev.page-enter {
    transform: translate(100%, 0);
  }

  &.page--prev.page-enter-active {
    transform: translate(0, 0);
  }

  &.page--prev.page-exit {
    transform: translate(100%, 0);
  }

  &.page-exit .page__inner {
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  }
`;
