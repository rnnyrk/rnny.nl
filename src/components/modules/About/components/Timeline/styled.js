import styled from 'styled-components';

export const Years = styled.div`
  position: relative;
  flex-basis: 120px;
  text-align: center;
  font-size: 18px;
  font-family: ${(props) => props.theme.font.mono};

  &:before {
    content: '';
    position: absolute;
    top: 45px;
    left: 50%;
    height: 100%;
    width: 2px;
    margin-left: -1px;
    background: ${(props) => props.theme.gray};
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const TimelineContainer = styled.div`
  grid-column: 4 / span 6;
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
`;