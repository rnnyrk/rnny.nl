import styled from 'styled-components';
import { media } from 'styles/utils';

import Container from 'common/Container';

export const CardsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 10px;

  ${media.desktop`
    flex-wrap: wrap;
    max-width: 48em;
    margin: 30px auto;
  `}
`;
