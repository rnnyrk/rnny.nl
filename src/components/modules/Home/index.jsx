import React from 'react';

import { PageLink } from 'common/Anchor';

import { Usp, Homepage } from './styled';

const Home = () => (
  <Homepage>
    <Usp>
      <li>Concepting</li>
      <li>Designing</li>
      <li>&amp; Developing</li>
      <li>Mobile apps</li>
      <li>User interfaces</li>
      <li>Websites &amp; Web apps</li>
    </Usp>

    <PageLink to="/about">
      About
    </PageLink>
  </Homepage>
);

export default Home;
