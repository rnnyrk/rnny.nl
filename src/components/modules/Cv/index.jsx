import React, { PureComponent } from 'react';

import { PageLink } from 'common/Button';
import Container from 'common/Container';

class Cv extends PureComponent {
  render() {
    return (
      <Container>
        <div>Cv</div>
        <PageLink to="/work">Work</PageLink>
        <PageLink to="/" variant="right">Home</PageLink>
      </Container>
    );
  }
}

export default Cv;
