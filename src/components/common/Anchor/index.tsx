import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled.a.attrs(({ href }) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  href,
}))`
  text-decoration: none;
  color: inherit;
`;

interface PageProps {
  variant?: string;
}

export const PageLink = styled(Link)<PageProps>`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 20px 30px;
  overflow: hidden;
  text-decoration: none;
  font-family: ${(props) => props.theme.font.mono};
  color: inherit;
  background: none;

  ${(props) => props.variant === 'right' && css`
    left: auto;
    right: 0;
  `}
`;
