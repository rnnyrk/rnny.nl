import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'react-router-dom';

type PageLinkProps = {
  position?: 'left' | 'right';
}

const PageLink = styled(Link)<PageLinkProps>`
  display: none;
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 0;
  padding: 20px 30px;
  overflow: hidden;
  text-decoration: none;
  font-family: ${(props) => props.theme.font.mono};
  color: inherit;
  background: none;

  ${(props) => props.position === 'right' && css`
    left: auto;
    right: 0;
  `}

  ${media.tablet`
    display: block;
  `}
`;

export default PageLink;
