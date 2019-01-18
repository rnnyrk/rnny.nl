import React from 'react';
import PT from 'prop-types';

import { HeaderContainer, Letter, Navigation, Name } from './styled';

const Header = ({ scrolled }) => (
  <Navigation scrolled={scrolled}>
    <HeaderContainer>
      <Name>
        <Letter visible={!scrolled} dangerouslySetInnerHTML={{ __html: '<' }} />
        <Letter>r</Letter>
        <Letter visible={scrolled}>o</Letter>
        <Letter>n</Letter>
        <Letter>n</Letter>
        <Letter>y</Letter>
        <Letter>r</Letter>
        <Letter visible={scrolled}>o</Letter>
        <Letter visible={scrolled}>o</Letter>
        <Letter>k</Letter>
        <Letter visible={!scrolled}>/</Letter>
        <Letter visible={!scrolled} dangerouslySetInnerHTML={{ __html: '>' }} />
      </Name>
    </HeaderContainer>
  </Navigation>
);

Header.propTypes = {
  scrolled: PT.bool,
};

export default Header;
