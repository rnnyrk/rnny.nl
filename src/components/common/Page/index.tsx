import React, { FC } from 'react';

import Header from 'common/Header';

import { PageContainer, Content } from './styled';

const Page:FC<PageProps> = ({ className, children, useGrid }) => {
  return (
    <PageContainer className={className}>
      <Header />
      <Content useGrid={useGrid}>
        {children}
      </Content>
    </PageContainer>
  );
}

export interface PageProps {
  className: string,
  children: Node,
  useGrid?: boolean,
}

export default Page;