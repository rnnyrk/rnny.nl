import React, { PureComponent } from 'react';

import Container from 'common/Container';
import { Navigation, Name, Letter } from './styled';

class Nav extends PureComponent {
  state = {
    scrolledPage: false,
  };

  render() {
    const { scrolledPage } = this.state;

    return (
      <Navigation>
        <Container>
          <Name>
            <Letter visible={!scrolledPage} dangerouslySetInnerHTML={{ __html: '<' }} />
            <Letter>r</Letter>
            <Letter visible={scrolledPage}>o</Letter>
            <Letter>n</Letter>
            <Letter>n</Letter>
            <Letter>y</Letter>
            <Letter>r</Letter>
            <Letter visible={scrolledPage}>o</Letter>
            <Letter visible={scrolledPage}>o</Letter>
            <Letter>k</Letter>
            <Letter visible={!scrolledPage} dangerouslySetInnerHTML={{ __html: '>' }} />
          </Name>
        </Container>
      </Navigation>
    );
  }
}

export default Nav;
