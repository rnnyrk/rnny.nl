import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import * as t from 'types';

import { Anchor } from 'common';

type SocialListProps = {
  variant?: t.ColorType;
}

export const SocialList = styled.div<SocialListProps>`
  display: flex;
  padding: 0 30px;

  ${media.tablet`
    align-items: center;
  `}

  svg,
  ${Anchor} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${Anchor} {
    display: flex;
    align-items: center;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 30px;
    cursor: pointer;
    fill: ${(props) => props.theme.white};
    opacity: .5;
    transition: opacity .2s;

    ${media.tablet`
      width: 25px;
      height: 25px;
      margin-right: 20px;
    `}

    ${media.desktop`
      &:hover {
        opacity: 1;
      }
    `}
  }

  ${(props) => props.variant === 'white' && css`
    svg {
      fill: ${(props) => props.theme.black};
    }
  `}
`;