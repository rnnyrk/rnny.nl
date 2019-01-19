import React, { FunctionComponent } from 'react';

import { HeaderContainer, Letter, Navigation, Name } from './styled';

const Header:FunctionComponent<HeaderInterface> = ({ scrolled })  => (
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

export interface HeaderInterface {
  scrolled: boolean,
}

export default Header;
