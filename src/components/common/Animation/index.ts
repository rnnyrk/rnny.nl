import styled, { css } from 'styled-components';
import posed from 'react-pose';

export const PoseAnimation = styled(posed.div({
  default: {
    y: '-100vh',
  },
  in: {
    y: '0',
  },
  out: {
    y: '100vh',
  },
}))`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  background: ${(props) => props.theme.white.off};

  ${(props) => props.pose === 'in' && css`
    z-index: 10;
  `}
`;

export const PoseAnimation2 = styled(posed.div({
  default: {
    y: '100vh',
  },
  in: {
    y: '0',
  },
  out: {
    y: '-100vh',
  },
}))`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  background: ${(props) => props.theme.purple.light};

  ${(props) => props.pose === 'in' && css`
    z-index: 10;
  `}
`;

export const PoseContainer = styled(posed.div({
  enter: {
    opacity: 1,
    delay: 2000,
    afterChildren: true,
  },
  exit: { opacity: 0 },
}))`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;
