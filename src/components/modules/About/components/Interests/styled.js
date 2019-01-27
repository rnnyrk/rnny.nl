import styled from 'styled-components';

export const InterestsContainer = styled.div`
  grid-column: 2 / span 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

export const InterestBox = styled.div`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.font.mono};
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const List = styled.ul`
  padding-left: 0;
  margin: 0;
  font-size: 15px;
  line-height: 40px;
  font-style: italic;
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;

    &:before {
      content: '';
      position: absolute;
      top: 15px;
      left: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.gray};
    }
  }
`;
