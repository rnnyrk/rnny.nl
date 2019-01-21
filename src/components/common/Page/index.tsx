import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';

import Header from 'common/Header';

import { PageContainer } from './styled';

const Page:FunctionComponent<PageInterface> =
  ({ children, location: { state }, variant }) =>
{
  // console.log('location', location);

  return (
    <PageContainer
      className={cn({
        page: true,
        'page--prev': state && state.prev,
      })}
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