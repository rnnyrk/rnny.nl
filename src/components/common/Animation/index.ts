import styled from 'styled-components';
import posed from 'react-pose';

export const PoseContainer = styled(posed.div({
  before: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    delay: 300,
    afterChildren: true,
  },
  exit: { opacity: 0 },
}))`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;
