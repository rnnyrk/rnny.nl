import styled from 'styled-components';

export const BioContainer = styled.div`
  grid-column: 4 / span 6;
`;

export const BioHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Photo = styled.figure`
  width: 80px;
  height: 80px;
  margin: 0 20px 0 0;
  background: ${(props) => props.theme.black};
  border-radius: 50%;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;
