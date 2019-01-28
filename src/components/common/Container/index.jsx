import styled from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  width: 100%;

  ${media.tablet`
    max-width: 38em;
    margin: 0 auto;
  `}

  ${media.desktop`
    max-width: 48em;
  `}
`;
