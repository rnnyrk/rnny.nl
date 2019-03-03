import styled from 'styled-components';
import posed from 'react-pose';

export const PoseContainer = styled(posed.div({
  before: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}))`
  min-height: 100vh;
`;
