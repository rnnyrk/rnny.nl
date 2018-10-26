import React, { PureComponent } from 'react';

import { AnchorButton } from 'common/Button';
import Container from 'common/Container';

class Cv extends PureComponent {
  render() {
    return (
      <Container>
        <div>Cv</div>
        <AnchorButton to="/">Home</AnchorButton>
      </Container>
    );
  }
}

export default Cv;
