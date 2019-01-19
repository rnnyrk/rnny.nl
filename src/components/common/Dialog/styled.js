import styled from 'styled-components';

export const DialogContainer = styled.div`
  .dialog-enter {
    opacity: 0.01;
    transform: scale(1.1);
  }

  .dialog-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  .dialog-exit {
    opacity: 1;
    transform: scale(1);
  }

  .dialog-exit-active {
    opacity: 0.01;
    transform: scale(1.1);
    transition: all 300ms;
  }
`;

export const DialogOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .2);
`

export const DialogBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: 50vh;
  background: ${(props) => props.theme.white};
  transform: translate(-50%, -50%);
`