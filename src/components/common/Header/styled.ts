import styled, { css } from 'styled-components';

type HeaderContainerProps = {
  scrolled?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;

  ${(props) => props.scrolled && css`
    position: fixed;
  `}
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.mono};
  color: inherit;
`;

type LetterProps = {
  visible?: boolean;
}

export const Letter = styled.span<LetterProps>`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -.32em' : '0'};
  transition: opacity .2s ease-out,
              margin .2s ease-in-out;
`;
