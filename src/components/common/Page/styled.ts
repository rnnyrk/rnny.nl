import styled, { css } from 'styled-components';

export interface PageProps {
  variant?: string;
}

export const PageContainer = styled.section<PageProps>`
  display: flex;
  min-height: 100vh;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export interface ContentProps {
  useGrid?: boolean;
}

export const Content = styled.div<ContentProps>`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 150px 30px;

  ${(props) => props.useGrid && css`
    display: grid;
    grid-template-columns: repeat(12, 80px);
    grid-gap: 20px;
    align-content: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 150px 0 50px;
  `}
`