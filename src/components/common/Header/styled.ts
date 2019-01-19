import styled, { css } from 'styled-components';

import { HeaderInterface } from 'common/Header';
import Container from 'common/Container';

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav<HeaderInterface>`
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

export const Name = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.space};
  color: ${(props) => props.theme.white};
`;

interface LetterInterface {
  visible?: boolean;
}

export const Letter = styled.span<LetterInterface>`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -.32em' : '0'};
  transition: opacity .2s ease-out,
              margin .2s ease-in-out;
`;
