import React from 'react';

import { PageLink } from 'common';
import Page from 'modules/Page';
import { Bio, Interests, Timeline } from './components';

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
