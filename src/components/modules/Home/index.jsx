import React from 'react';

import { AnchorButton } from 'common/Button';
import Bio from 'common/Bio';
import Container from 'common/Container';
import Cards from 'modules/Cards';
import Page from 'common/Page';

const Home = () => (
  <Page>
    <Container>
      <Bio />
      <p>Front-end developer from the Netherlands, based in Amsterdam. I've got a passion to build awesome applications for the web. I like using techniques such as React (Native), Progressive Web Apps and Styled Components. Also, I got a big interest for performance and think every website should be optimized.</p>
    </Container>
    <Cards />
    <Container>
      <p>Currently I'm working as a front-end developer within Label A. Within Label A we're building web-based applications for awesome clients. Check our website to find out more.</p>
      <p>I'm also available for freelance work. You can contact me if you're interested in building a website or a mobile- / web based application.</p>
      <p>You can check out my CV or some projects I've done below.</p>
      <AnchorButton to="/cv">CV</AnchorButton>
      <AnchorButton to="/work">Projects</AnchorButton>
    </Container>
  </Page>
);

export default Home;
