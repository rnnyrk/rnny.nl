import styled from 'styled-components';
import { media } from 'styles/utils';
import posed from 'react-pose';

export const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
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

export const HoverImage = styled(posed.img({
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
}))`
  position: absolute;
  max-width: 150px;
  z-index: ${(props) => props.pose === 'visible' ? 3 : 1};
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
