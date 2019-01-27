import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import PT from 'prop-types';

import Traingle from 'vectors/triangle.svg?external';

export const AnchorButton = styled(Link)`
  display: inline-block;
  min-width: 100px;
  padding: 20px 30px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  text-decoration: none;

  ${media.desktop`
    transition: background .2s ease-in;

    &:hover {
      background: ${(props) => props.theme.blue.dark};
    }
  `}
`;

export const Button = styled(AnchorButton).attrs({ as: 'button' })`

`;

export const PageLink = styled(AnchorButton)`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  opacity: .5;
  padding: 10px 20px;
  overflow: hidden;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  background: none;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: url(${Traingle}) no-repeat center;
    background-size: 100%;
  }

  ${(props) => props.variant === 'right' && css`
    left: auto;
    right: 0;

    &:before {
      left: auto;
      right: 0;
      transform: rotate(-90deg);
    }
  `}

  ${media.desktop`
    transition: opacity .2s ease-in;

    &:before {
      transition: width .2s ease-in,
                  height .2s ease-in;
    }

    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.white};
      background: none;

      &:before {
        width: 200px;
        height: 200px;
      }
    }
  `}
`;

PageLink.propTypes = {
  variant: PT.oneOf(['left', 'right']),
};

PageLink.defaultProps = {
  variant: 'left',
};
