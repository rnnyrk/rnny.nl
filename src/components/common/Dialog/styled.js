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
  background: rgba(0, 0, 0, .2);
`;

export const DialogBody = styled(posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15,
      },
      default: { duration: 300 }
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
}))`
  position: absolute;
  z-index: 4;
  width: 50vw;
  height: 50vh;
  background: ${(props) => props.theme.white};
`;
