import styled from 'styled-components';

export const PageContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.purple} 0%,
    ${(props) => props.theme.purple.dark} 100%
  );
`;
