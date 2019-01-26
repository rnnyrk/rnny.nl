import styled, { css } from 'styled-components';

interface HeaderContainerProps {
  scrolled?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  margin-bottom: 40px;

  ${(props) => props.scrolled && css`
    position: fixed;
    top: 0;
    left: 0;
  `}
`;

interface NameProps {
  variant?: string;
}

export const Name = styled.h1<NameProps>`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.space};
  color: inherit;
`;

interface LetterProps {
  visible?: boolean;
}

export const Letter = styled.span<LetterProps>`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -.32em' : '0'};
  transition: opacity .2s ease-out,
              margin .2s ease-in-out;
`;
