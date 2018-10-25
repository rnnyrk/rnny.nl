import styled from 'styled-components';
// import { media } from 'styles/utils';

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.white};
`;
