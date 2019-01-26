import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'common/Header';

import { PageContainer, Content } from './styled';

const Page:FC<PageProps> = ({ className, children, variant }) => {
  return (
    <PageContainer className={className} variant={variant}>
      <Header variant={variant} />
      <Content>
        {children}
      </Content>
    </PageContainer>
  );
}

export interface PageProps {
  className: string,
  children: Node,
  variant?: string;
}

export default withRouter(Page);