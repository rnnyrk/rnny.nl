import styled from 'styled-components';
import { media } from 'styles/utils';

// @ts-ignore
import Presentation from 'images/presentation-desktop.png?external';
import Page from 'modules/Page';
import { Content } from 'modules/Page/styled';

export const Homepage = styled(Page)`
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.purple},
    ${(props) => props.theme.purple.dark}
  );

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  &:after {
    z-index: 0;
    bottom: 0;
    background: url(${Presentation}) no-repeat center / cover;
  }

  &:before {
    z-index: 1;
    height: 250px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.purple},
      transparent
    );
  }

  ${Content} {
    align-items: flex-end;
    height: 100vh;

    ${media.tablet`
      align-items: center;
    `}
  }
`;

export const Usp = styled.ul`
  margin: 0;
  padding-left: 0;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  list-style: none;

  li:nth-child(3) {
    margin-top: 10px;
  }

  li:nth-child(3),
  li:nth-child(4) {
    font-weight: 700;
  }

  ${media.tablet`
    font-size: 48px;
    line-height: 60px;

    li:nth-child(3) {
      margin-top: 20px;
    }
  `}
`;
