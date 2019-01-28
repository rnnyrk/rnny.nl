import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Anchor } from 'common/Anchor';

interface HeaderContainerProps {
  scrolled?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
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

interface LetterProps {
  visible?: boolean;
}

export const Letter = styled.span<LetterProps>`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -.32em' : '0'};
  transition: opacity .2s ease-out,
              margin .2s ease-in-out;
`;

interface SocialProps {
  // variant: 'purple' | 'white';
  variant: string;
}

export const Social = styled.div<SocialProps>`
  display: flex;
  align-items: center;

  svg,
  ${Anchor} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${Anchor} {
    display: flex;
    align-items: center;
  }

  svg {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    cursor: pointer;
    fill: ${(props) => props.theme.white};
    opacity: .5;
    transition: opacity .2s;

    ${media.desktop`
      &:hover {
        opacity: 1;
      }
    `}
  }

  ${(props) => props.variant === 'white' && css`
    svg {
      fill: ${(props) => props.theme.black};
    }
  `}
`;