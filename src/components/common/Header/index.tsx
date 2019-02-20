import React, { useState } from 'react';

import useWindowScrollPosition from 'services/hooks/windowScroll';
import Social from 'common/Social';

import { HeaderContainer, Letter, Name } from './styled';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollY = useWindowScrollPosition();

  if (scrollY >= 10 && !scrolled) {
    setScrolled(true);
  } else if (scrollY < 10 && scrolled) {
    setScrolled(false);
  }

  return (
    <HeaderContainer scrolled={scrolled}>
      <Name>
        <Letter
          visible={scrolled}
          dangerouslySetInnerHTML={{ __html: '<' }}
        />
        <Letter>r</Letter>
        <Letter visible={!scrolled}>o</Letter>
        <Letter>n</Letter>
        <Letter>n</Letter>
        <Letter>y</Letter>
        <Letter>r</Letter>
        <Letter visible={!scrolled}>o</Letter>
        <Letter visible={!scrolled}>o</Letter>
        <Letter>k</Letter>
        <Letter visible={scrolled}>/</Letter>
        <Letter
          visible={scrolled}
          dangerouslySetInnerHTML={{ __html: '>' }}
        />
      </Name>

      <Social />
    </HeaderContainer>
  );
}

export default Header;
