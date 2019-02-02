import React from 'react';

import { PageLink } from 'common/Anchor';

import { Usp, Homepage } from './styled';

const Home = () => (
  <Homepage useCanvas>
    <Usp>
      <li>Designing</li>
      <li>&amp; Developing</li>
      <li>Websites &amp;</li>
      <li>Mobile / Web apps</li>
    </Usp>

    <PageLink to="/about">
      About
    </PageLink>
  </Homepage>
);

export default Home;
