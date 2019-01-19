import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled.a.attrs(({ href }) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  href,
}))`
  text-decoration: none;
  color: ${(props) => props.theme.black};
  border-bottom: 2px solid ${(props) => props.theme.black};
`;

interface PageLinkInterface {
  variant?: string;
}

export const PageLink = styled(Link)<PageLinkInterface>`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 10px 20px;
  overflow: hidden;
  text-decoration: none;
  font-family: ${(props) => props.theme.font.space};
  color: ${(props) => props.theme.white};
  background: none;

  ${(props) => props.variant === 'right' && css`
    left: auto;
    right: 0;
  `}
`;
