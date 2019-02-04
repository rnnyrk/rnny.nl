import styled, { keyframes } from 'styled-components';
import { media } from 'styles/utils';

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

export const Wave = styled.span`
  display: inline-block;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(20deg); }
  100% { transform: rotate(0deg); }
`;

export const BioHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;

  ${media.desktop`
    &:hover ${Wave} {
      animation: ${rotate} .5s linear infinite;
    }
  `}
`;

export const BioContainer = styled.div`
  grid-column: 4 / span 6;
`;
