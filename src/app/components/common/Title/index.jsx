import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.span`
  font-size: 24px;
  font-weight: 800;

  ${(props) => props.center && css`
    display: inline-block;
    width: 100%;
    text-align: center;
  `}

  ${media.desktop`
    font-size: 28px;
  `}
`;
