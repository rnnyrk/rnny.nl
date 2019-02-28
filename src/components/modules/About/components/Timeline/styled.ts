import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import posed from 'react-pose';

export const Years = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-bottom: 20px;

  ${media.tablet`
    flex-basis: auto;
    flex-direction: column;
    margin: 0;
  `}
`;

type YearNumberProps = {
  active: boolean;
}

export const YearNumber = styled.div<YearNumberProps>`
  position: relative;
  width: 100px;
  margin-right: 35px;
  font-size: 18px;
  font-family: ${(props) => props.theme.font.mono};
  opacity: .5;
  cursor: pointer;

  ${media.tablet`
    height: 100px;
    margin: 0 0 35px;
  `}

  &:before {
    content: '';
    position: absolute;
    top: 13px;
    left: 55px;
    height: 2px;
    width: calc(100% - 35px);
    background: ${(props) => props.theme.gray};

    ${media.tablet`
      top: 35px;
      left: 21.5px;
      width: 2px;
      height: calc(100% - 35px);
    `}
  }

  ${(props) => props.active && css`
    opacity: 1;
  `}
`;

type ContentProps = {
  visible: boolean;
}

export const Content = styled(posed.div({
  visible: {
    opacity: 1,
    top: '0px',
  },
  hidden: {
    top: '30px',
    opacity: 0,
  },
}))<ContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const TimelineContent = styled.div`
  flex-basis: 85%;
  position: relative;
`;

export const TimelineContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  position: relative;
  z-index: 2;
  height: 800px;
  margin-top: 30px;

  ${media.tablet`
    grid-column: 3 / span 7;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 600px;
    margin-top: 75px;
  `}

  ${media.desktop`
    grid-column: 4 / span 6;
    height: 450px;
  `}
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