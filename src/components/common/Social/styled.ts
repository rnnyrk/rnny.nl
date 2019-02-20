import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

import { Anchor } from 'common/Anchor';

type SocialProps = {
  variant: '' | 'purple' | 'white'; // losse type van maken
}

export const SocialContainer = styled.div<SocialProps>`
  display: flex;
  align-items: center;

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
    width: 25px;
    height: 25px;
    margin-right: 20px;
    cursor: pointer;
    fill: ${(props) => props.theme.white};
    opacity: .5;
    transition: opacity .2s;

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