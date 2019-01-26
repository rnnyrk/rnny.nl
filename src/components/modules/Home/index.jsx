import React, { useState } from 'react';

import { PageLink } from 'common/Anchor';

import { Homepage } from './styled';

const Home = () => (
  <Homepage>
    <PageLink to="/about">
      About
    </PageLink>
  </Homepage>
);

export default Home;
