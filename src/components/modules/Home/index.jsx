import React from 'react';

import { PageLink } from 'common/Anchor';
import Page from 'common/Page';

const Home = () => {
  return (
    <Page>
      <PageLink to="/about">
        About
      </PageLink>
    </Page>
  );
}

export default Home;
