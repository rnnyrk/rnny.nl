import styled from 'styled-components';

import Presentation from 'static/images/presentation-desktop.png?external';
import Page from 'common/Page';

export const Homepage = styled(Page)`
  flex-direction: column;
  justify-content: center;
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

export const Usp = styled.ul`
  margin: 0;
  padding-left: 0;
  font-size: 48px;
  line-height: 60px;
  text-transform: uppercase;
  list-style: none;

  li:nth-child(4) {
    margin-top: 10px;
  }

  li:nth-child(4),
  li:nth-child(5),
  li:nth-child(6) {
    font-weight: 700;
  }
`;
