import styled from 'styled-components';

import Presentation from 'static/images/presentation-desktop.png?external';
import Page from 'common/Page';

export const Homepage = styled(Page)`
  background: url(${Presentation}) no-repeat center / cover;

  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 250px;
  }

  &:before {
    top: 0;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.purple},
      transparent
    );
  }

  &:after {
    bottom: 0;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.purple},
      transparent
    );
  }
`;
