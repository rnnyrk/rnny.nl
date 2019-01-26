import styled from 'styled-components';

export interface PageProps {
  variant?: string;
}

export const PageContainer = styled.section<PageProps>`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 30px;
`