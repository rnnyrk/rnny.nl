import React from 'react';

import { PageLink } from 'common/Anchor';
import Page from 'common/Page';

import Bio from './components/Bio';
import Interests from './components/Interests';
import Timeline from './components/Timeline';

const About = () => {
  return (
    <Page useGrid>
      <Bio />
      <Interests />
      <Timeline />

      <PageLink to="/" position="right">
        Home
      </PageLink>
    </Page>
  );
}

export default About;
