import React, { useState } from 'react';
import PT from 'prop-types';

import useWindowScrollPosition from 'services/hooks/windowScroll';
import Header from 'common/Header';

import { PageContainer } from './styled';

const Page = ({ children }) => {
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

Page.propTypes = {
  children: PT.node.isRequired,
};

export default Page;