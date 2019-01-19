import React, { FunctionComponent, useState } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import useWindowScrollPosition from 'services/hooks/windowScroll';
import Header from 'common/Header';

import { PageContainer } from './styled';

const Page:FunctionComponent<PageInterface> =
  ({ children, location: { state }, variant }) =>
{
  let [scrolled, setScrolled] = useState(false);
  const scrollY = useWindowScrollPosition();

  if (scrollY >= 10 && !scrolled) {
    setScrolled(true);
    document.body.classList.add('scrolled');
  } else if (scrollY < 10 && scrolled) {
    setScrolled(false);
    document.body.classList.remove('scrolled');
  }

  console.log('location', location);
  console.log('location state', state);

  const cx = classNames({
    page: true
  });

  return (
    <PageContainer
      className={cx}
      variant={variant}
    >
      <Header scrolled={scrolled} />
      <div className="page__inner">
        {children}
      </div>
    </PageContainer>
  );
}

export interface PageInterface {
  children: Node,
  location: {
    state: object;
  };
  variant?: string;
}

export default withRouter(Page);