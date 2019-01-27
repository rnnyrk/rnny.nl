import styled from 'styled-components';
import posed from 'react-pose';

export default styled(posed.div({
  before: {
    x: ({ direction }) => (direction === 'left' ? '100%' : '-100%'),
    transition: { duration: 500 },
    opacity: 1,
  },
  enter: {
    x: '0%',
    transition: { duration: 500 },
  },
  exit: {
    x: ({ direction }) => (direction === 'left' ? '-100%' : '100%'),
    transition: { duration: 500 },
    opacity: 0.5,
  },
}))`
  min-height: calc(100vh - 113px);
`;