import React, { useState, useContext } from 'react';

import Mail from 'vectors/mail.svg';
import Linkedin from 'vectors/linkedin.svg';
import Twitter from 'vectors/twitter.svg';

import { ColorContext } from 'services/context/ColorContext';
import { Anchor } from 'common/Anchor';
import Dialog from 'common/Dialog';

import { SocialContainer } from './styled';

const Social = () => {
  const [dialog, setDialog] = useState(false);
  const currentColor = useContext(ColorContext);

  return (
    <>
      <Dialog isOpen={dialog} onClose={() => setDialog(false)} />
      <SocialContainer variant={currentColor}>
        <Mail onClick={() => setDialog(true)} />
        <Anchor href="https://www.linkedin.com/in/ronny-rook-02ab1622/">
          <Linkedin />
        </Anchor>
        <Anchor href="https://twitter.com/rnnyrk">
          <Twitter />
        </Anchor>
      </SocialContainer>
    </>
  );
}

export default Social;
