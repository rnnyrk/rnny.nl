import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const Years = styled.div`
  display: flex;
  flex-direction: column;
`;

type YearNumberProps = {
  active: boolean;
}

export const YearNumber = styled.div<YearNumberProps>`
  position: relative;
  height: 100px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: ${(props) => props.theme.font.mono};
  opacity: .6;

  &:before {
    content: '';
    position: absolute;
    top: 35px;
    left: 21.5px;
    width: 2px;
    height: calc(100% - 35px);
    background: ${(props) => props.theme.gray};
  }

  ${(props) => props.active && css`
    opacity: 1;
  `}
`;

type ContentProps = {
  active: boolean;
}

export const Content = styled.div<ContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;

  ${(props) => props.active && css`
    opacity: 1;
  `}
`;

export const TimelineContent = styled.div`
  flex-basis: 85%;
  position: relative;
`;

export const TimelineContainer = styled.section`
  grid-column: 4 / span 6;
  display: flex;
  justify-content: space-between;
  height: 380px;
  margin-top: 75px;
`;

// todo
type LetterProps = {
  visible?: boolean;
}

export const Letter = styled.span<LetterProps>`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -.32em' : '0'};
  transition: opacity .2s ease-out,
              margin .2s ease-in-out;
`;

export const Next = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 90px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => props.theme.gray.dark};
  font-family: ${(props) => props.theme.font.mono};

  ${media.desktop`
    &:hover {
      color: ${(props) => props.theme.purple.light};
    }
  `}
`;