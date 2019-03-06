import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

type NavigationProps = {
  open: boolean;
}

export const Hamburger = styled.div<NavigationProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 0;
  width: 25px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.white};
    transform-origin: center;
    transition: transform .1s ease-in;
  }

  &:before {
    transform: rotate(0) translateY(-3px);
  }

  &:after {
    transform: rotate(0) translateY(4px);
  }

  ${(props) => props.open && css`
    z-index: 3;

    &:before {
      transform: rotate(-45deg) translateY(0);
    }

    &:after {
      transform: rotate(45deg) translateY(0);
    }
  `}
`;

export const MobileNavigation = styled.nav<NavigationProps>`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateX(-100vw);
  transition: transform .2s ease-in;
  background: ${(props) => props.theme.purple};

  ${(props) => props.open && css`
    transform: translateX(0);
  `}

  ${media.tablet`
    display: none;
  `}
`;