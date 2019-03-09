import styled from 'styled-components';
import { media } from 'styles/utils';
import posed from 'react-pose';

import Close from 'vectors/close.svg';

export const CloseDialog = styled(Close)`
  position: absolute;
  top: 28px;
  right: 20px;
  width: 34px;
  height: 34px;
  padding: 7px;
  cursor: pointer;
  fill: ${(props) => props.theme.gray};

  ${media.desktop`
    display: none;
  `}
`;

export const DialogOverlay = styled(posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  background: rgba(0, 0, 0, .5);
`;

export const DialogBody = styled(posed.div({
  enter: {
    y: '-50%',
    x: '-50%',
    scale: 1,
    opacity: 1,
    delay: 300,
    transition: {
      duration: 300,
    },
  },
  exit: {
    y: '-50%',
    x: '-50%',
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 150,
    },
  },
}))`
  position: fixed;
  z-index: 4;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.white};

  &:before {
    content: '';
    width: 110vw;
    height: 110vh;
    position: absolute;
    top: -5vh;
    left: -5vw;
    z-index: -1;
    background: ${(props) => props.theme.white};

    ${media.tablet`
      display: none;
    `}
  }

  ${media.tablet`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50vw;
    height: auto;
    max-width: 600px;
    min-height: 200px;
  `}
`;
