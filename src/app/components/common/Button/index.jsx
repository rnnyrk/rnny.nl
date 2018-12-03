import styled from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  padding: 20px 30px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};

  ${media.desktop`
    transition: background .2s ease-in;

    &:hover {
      background: ${(props) => props.theme.blue.dark};
    }
  `}
`;

export const AnchorButton = styled(Button).attrs({ as: Link })`
  text-decoration: none;
`;
