import styled from 'styled-components';
import { media } from 'styles/utils';

export const Years = styled.div`
  position: relative;
  flex-basis: 100px;
  font-size: 18px;
  font-family: ${(props) => props.theme.font.mono};

  &:before {
    content: '';
    position: absolute;
    top: 45px;
    left: 21.5px;
    height: calc(100% - 45px);
    width: 2px;
    background: ${(props) => props.theme.gray};
  }
`;

export const Content = styled.div`
  flex: 1;
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

export const Current = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TimelineContainer = styled.section`
  grid-column: 4 / span 6;
  margin-top: 75px;
`;