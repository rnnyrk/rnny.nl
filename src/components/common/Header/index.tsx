import React, { FC, useState } from 'react';

import useWindowScrollPosition from 'services/hooks/windowScroll';

import { HeaderContainer, Letter, Name } from './styled';

const Header:FC<HeaderProps> = ({ variant }) => {
  let [scrolled, setScrolled] = useState(false);
  const scrollY = useWindowScrollPosition();

  if (scrollY >= 10 && !scrolled) {
    setScrolled(true);
    document.body.classList.add('scrolled');
  } else if (scrollY < 10 && scrolled) {
    setScrolled(false);
    document.body.classList.remove('scrolled');
  }

  return (
    <HeaderContainer scrolled={scrolled}>
      <Name variant={variant}>
        <Letter
          visible={!scrolled}
          dangerouslySetInnerHTML={{ __html: '<' }}
        />
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
        <Letter
          visible={!scrolled}
          dangerouslySetInnerHTML={{ __html: '>' }}
        />
      </Name>
    </HeaderContainer>
  );
}

export interface HeaderProps {
  variant?: string,
}

export default Header;
