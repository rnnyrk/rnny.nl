import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Container from 'common/Container';

class Cv extends PureComponent {
  render() {
    return (
      <Container>
        <div>Cv</div>
        <Link to="/">Home</Link>
      </Container>
    );
  }
}

export default Cv;
