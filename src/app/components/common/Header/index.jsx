import React from 'react';
import PT from 'prop-types';

import Container from 'common/Container';
import { Navigation, Name, Letter } from './styled';

const Nav = ({ scrolledPage }) => (
  <Navigation scrolled={scrolledPage}>
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
        <Letter visible={!scrolledPage}>/</Letter>
        <Letter visible={!scrolledPage} dangerouslySetInnerHTML={{ __html: '>' }} />
      </Name>
    </Container>
  </Navigation>
);

Nav.propTypes = {
  scrolledPage: PT.bool,
};

export default Nav;
