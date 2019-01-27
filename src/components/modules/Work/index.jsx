import React, { PureComponent } from 'react';

import { PageLink } from 'common/Button';
import Container from 'common/Container';

class Work extends PureComponent {
  render() {
    return (
      <Container>
        <div>Work</div>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/cv" variant="right">CV</PageLink>
      </Container>
    );
  }
}

export default Work;
