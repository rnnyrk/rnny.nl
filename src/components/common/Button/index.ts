import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

const Button = styled.button`
  padding: 10px 35px;
  font-size: 14px;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.font.mono};
  cursor: pointer;
  border: 0;
  background: ${(props) => props.theme.purple.light};

  ${media.desktop`
    transition: background .2s ease-in;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  `}
`;

export default Button;
