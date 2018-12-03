import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import PT from 'prop-types';

export const Wrapper = styled.div`
  display: flex;
`;

export const SocialLink = styled.a.attrs(({ href }) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  href,
}))`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 100%;

    ${(props) => props.type === 'github' && css`
      fill: #171515;
    `}

    ${(props) => props.type === 'linkedin' && css`
      fill: #0078b5;
    `}

    ${(props) => props.type === 'twitter' && css`
      fill: #1ba1f2;
    `}
  }

  ${media.desktop`
    &:hover {
      text-decoration: none;
    }
  `}
`;

SocialLink.propTypes = {
  href: PT.string.isRequired,
  type: PT.oneOf(['github', 'linkedin', 'twitter']),
};