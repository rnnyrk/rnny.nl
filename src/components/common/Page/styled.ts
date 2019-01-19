import styled, { css } from 'styled-components';

export interface PageContainerInterface {
  variant?: string;
}

export const PageContainer = styled.section<PageContainerInterface>`
  width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.purple} 0%,
    ${(props) => props.theme.purple.dark} 100%
  );

  ${(props) => props.variant === 'white' && css`
    color: ${(props) => props.theme.black};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.white} 0%,
      ${(props) => props.theme.white.off} 100%
    );
  `}
`;
