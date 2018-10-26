import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const AnchorButton = styled(Button).attrs({ as: Link })`
  text-decoration: none;
`;
