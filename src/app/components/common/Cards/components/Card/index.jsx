import styled from 'styled-components';
import PT from 'prop-types';
import { media } from 'styles/utils';

export const Card = styled.div`
  flex-basis: 100%;
  padding: 20px;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(100deg, ${(props) => props.colors[0]} 0%, ${(props) => props.colors[1]} 100%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .05);

  ${media.desktop`
    flex-basis: 49%;
    padding: 30px;
  `}

  ${media.desktop`
    transition: box-shadow .5s ease-in-out;

    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, .3);
    }
  `}
`;

Card.propTypes = {
  colors: PT.arrayOf(PT.string),
};

Card.defaultProps = {
  colors: ['#5092fc', '#2164d1'],
};

export default Card;
