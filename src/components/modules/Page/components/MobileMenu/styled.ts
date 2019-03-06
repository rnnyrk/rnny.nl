import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'react-router-dom';

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
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 75px 0 30px;
  background: ${(props) => props.theme.purple};
  opacity: 0;
  transform: translateX(-100vw);
  transition: opacity .2s ease-in,
              transform .2s ease-in;

  ${(props) => props.open && css`
    opacity: 1;
    transform: translateX(0);
  `}

  ${media.tablet`
    display: none;
  `}
`;

export const NavList = styled.ul`
  flex: 2;
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
  margin-bottom: 30px;
  list-style: none;
`;

export const NavItem = styled.li`
  flex-basis: 100%;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 22px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;