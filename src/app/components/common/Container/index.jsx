import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  width: 100%;

  ${media.tablet`
    max-width: 38em;
    margin: 0 auto;

    ${(props) => props.large && css`
      max-width: 48em;
    `}
  `}
`;
