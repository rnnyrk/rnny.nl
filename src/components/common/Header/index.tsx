import React, { useState, useContext } from 'react';

import useWindowScrollPosition from 'services/hooks/windowScroll';
import Mail from 'vectors/mail.svg';
import Linkedin from 'vectors/linkedin.svg';
import Twitter from 'vectors/twitter.svg';

import { ColorContext } from 'services/context/ColorContext';
import { Anchor } from 'common/Anchor';
import Dialog from 'common/Dialog';

import { HeaderContainer, Letter, Name, Social } from './styled';

const Header = () => {
  const [dialog, setDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentColor = useContext(ColorContext);
  const scrollY = useWindowScrollPosition();

  if (scrollY >= 10 && !scrolled) {
    setScrolled(true);
  } else if (scrollY < 10 && scrolled) {
    setScrolled(false);
  }

  return (
    <HeaderContainer scrolled={scrolled}>
      <Dialog isOpen={dialog} onClose={() => setDialog(false)} />

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

      <Social variant={currentColor}>
        <Mail onClick={() => setDialog(true)} />
        <Anchor href="https://www.linkedin.com/in/ronny-rook-02ab1622/">
          <Linkedin />
        </Anchor>
        <Anchor href="https://twitter.com/rnnyrk">
          <Twitter />
        </Anchor>
      </Social>
    </HeaderContainer>
  );
}

export default Header;
