import React, { FC, useState } from 'react';

import useWindowScrollPosition from 'services/hooks/windowScroll';
import Mail from 'vectors/mail.svg';
import Linkedin from 'vectors/linkedin.svg';
import Twitter from 'vectors/twitter.svg';

import Dialog from 'common/Dialog';

import { HeaderContainer, Letter, Name, Social } from './styled';

const Header:FC<HeaderProps> = ({ variant }) => {
  const [dialog, setDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <Dialog isOpen={dialog} onClose={() => setDialog(false)} />

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

      <Social>
        <Mail onClick={() => setDialog(true)} />
        <Linkedin />
        <Twitter />
      </Social>
    </HeaderContainer>
  );
}

export interface HeaderProps {
  variant?: string,
}

export default Header;
