import styled from 'styled-components';
import { media } from 'styles/utils';
import { animated } from 'react-spring';

export const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
  margin-top: 30px;

  ${media.tablet`
    grid-column: 2 / span 10;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin: 0;
  `}
`;

export const InterestBox = styled.div`
  flex-basis: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.font.mono};

  ${media.tablet`
    margin-bottom: 0;
  `}
`;

export const HoverImage = styled(animated.img)`
  position: absolute;
  z-index: 1;
  max-width: 150px;
  margin: 0;
  border: 6px solid ${(props) => props.theme.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
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
    cursor: default;

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

  a {
    text-decoration: none;
    color: ${(props) => props.theme.purple.light};

    ${media.desktop`
      &:hover {
        color: ${(props) => props.theme.purple.dark};
      }
    `}
  }
`;
