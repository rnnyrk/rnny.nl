import styled from 'styled-components';

import Container from 'common/Container';

export const BioContainer = styled(Container)`

`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const Photo = styled.figure`
  width: 80px;
  height: 80px;
  margin: 0;
  background: ${(props) => props.theme.black};
  border-radius: 50%;
`;
