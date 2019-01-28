import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'common/Header';

import { PageContainer, Content } from './styled';

const Page:FC<PageProps> = ({ className, children }) => {
  return (
    <PageContainer className={className}>
      <Header />
      <Content>
        {children}
      </Content>
    </PageContainer>
  );
}

export interface PageProps {
  className: string,
  children: Node,
}

export default withRouter(Page);