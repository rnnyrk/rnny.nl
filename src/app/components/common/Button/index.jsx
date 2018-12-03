import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: inline-block;
  padding: 20px 30px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.blue};
  border: 1px solid ${(props) => props.theme.blue};
`;

export const AnchorButton = styled(Button).attrs({ as: Link })`
  text-decoration: none;
`;
