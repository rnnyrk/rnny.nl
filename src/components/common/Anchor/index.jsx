import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

export const Anchor = styled.a.attrs(({ href }) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  href,
}))`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.prime};
`;

Anchor.propTypes = {
  href: PT.string,
};

export const PageLink = styled(Link)`
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

PageLink.propTypes = {
  variant: PT.oneOf(['left', 'right']),
};

PageLink.defaultProps = {
  variant: 'left',
};

