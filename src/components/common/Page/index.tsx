import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'common/Header';

import { PageContainer } from './styled';

const Page:FC<PageProps> = ({ children, variant }) => {
  return (
    <PageContainer variant={variant}>
      <Header variant={variant} />
      {children}
    </PageContainer>
  );
}

export interface PageProps {
  children: Node,
  variant?: string;
}

export default withRouter(Page);