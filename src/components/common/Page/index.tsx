import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import Header from 'common/Header';

import { PageContainer } from './styled';

const Page:FunctionComponent<PageInterface> =
  ({ children, location: { state }, variant }) =>
{
  console.log('location', location);
  console.log('location state', state);

  const cx = classNames({
    page: true,
    'page--prev': state && state.prev,
  });

  return (
    <PageContainer
      className={cx}
      variant={variant}
    >
      <Header variant={variant} />
      <div className="page__inner">
        {children}
      </div>
    </PageContainer>
  );
}

export interface PageInterface {
  children: Node,
  location: {
    state: {
      prev: boolean;
    };
  };
  variant?: string;
}

export default withRouter(Page);