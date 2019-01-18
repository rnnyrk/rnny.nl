import styled, { css } from 'styled-components';
import PT from 'prop-types';

import Container from 'common/Container';

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 20px 30px;
  margin-bottom: 40px;

  ${(props) => props.scrolled && css`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  `}
`;

Navigation.propTypes = {
  scrolled: PT.bool,
};

export const Name = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.space};
  color: ${(props) => props.theme.white};
`;

export const Letter = styled.span`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -.32em' : '0'};
  transition: opacity .2s ease-out,
              margin .2s ease-in-out;
`;
