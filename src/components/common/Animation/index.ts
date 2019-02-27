import styled from 'styled-components';
import posed from 'react-pose';

export const PoseBackground = styled(posed.div({
  purple: {
    color: '#ffffff',
    backgroundPosition: '0% 50%',
    transition: {
      duration: 500,
    },
  },
  white: {
    color: '#000000',
    backgroundPosition: '100% 50%',
    transition: {
      duration: 500,
    },
  }
}))`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.purple},
    ${(props) => props.theme.purple.dark},
    ${(props) => props.theme.white.off},
    ${(props) => props.theme.white}
  );
  background-size: 500%;
`;

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
