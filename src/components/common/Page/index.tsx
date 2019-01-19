import React, { FunctionComponent, useState } from 'react';

import useWindowScrollPosition from 'services/hooks/windowScroll';
import Header from 'common/Header';

import { PageContainer } from './styled';

const Page:FunctionComponent<PageInterface> = ({ children }) => {
  let [scrolled, setScrolled] = useState(false);
  const scrollY = useWindowScrollPosition();

  if (scrollY >= 10 && !scrolled) {
    setScrolled(true);
    document.body.classList.add('scrolled');
  } else if (scrollY < 10 && scrolled) {
    setScrolled(false);
    document.body.classList.remove('scrolled');
  }

  return (
    <PageContainer>
      <Header scrolled={scrolled} />
      {children}
    </PageContainer>
  );
}

export interface PageInterface {
  children: Node,
}

export default Page;