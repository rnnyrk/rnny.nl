import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import PT from 'prop-types';

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
  bottom: 0;
  left: 0;
  opacity: .5;
  padding: 10px 20px;
  color: ${(props) => props.theme.black};
  background: none;

  &:before {
    content: '';
    position: absolute;
    bottom: -13px;
    left: -3px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid ${(props) => props.white};
    transform: rotate(-45deg);
  }

  ${(props) => props.variant === 'right' && css`
    left: auto;
    right: 0;

    &:before {
      left: auto;
      right: -3px;
      transform: rotate(-135deg);
    }
  `}

  ${media.desktop`
    transition: opacity .2s ease-in;

    &:hover {
      opacity: 1;
      background: none;
    }
  `}
`;

PageLink.propTypes = {
  variant: PT.oneOf(['left', 'right']),
};

PageLink.defaultProps = {
  variant: 'left',
};
