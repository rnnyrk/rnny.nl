import styled from 'styled-components';
import posed from 'react-pose';

export const DialogOverlay = styled(posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  position: absolute;
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
    y: 0,
    x: '-50%',
    scale: 1,
    opacity: 1,
    delay: 300,
    transition: {
      duration: 300,
    },
  },
  exit: {
    y: 50,
    x: '-50%',
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 150,
    },
  },
}))`
  position: absolute;
  z-index: 4;
  top: 200px;
  left: 50%;
  width: 50vw;
  max-width: 600px;
  min-height: 200px;
  background: ${(props) => props.theme.white};
`;
