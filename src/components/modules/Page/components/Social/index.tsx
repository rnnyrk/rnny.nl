import React, { useState, useContext } from 'react';

import Mail from 'vectors/mail.svg';
import Linkedin from 'vectors/linkedin.svg';
import Github from 'vectors/github.svg';
import Twitter from 'vectors/twitter.svg';
import { ColorContext } from 'services/context/ColorContext';

import { Anchor, Dialog, Form } from 'common';
import { SocialList } from './styled';

const Social = () => {
  const [dialog, setDialog] = useState(false);
  const currentColor = useContext(ColorContext);

  return (
    <>
      <Dialog isOpen={dialog} onClose={() => setDialog(false)}>
        <Form />
      </Dialog>

      <SocialList variant={currentColor}>
        <Mail onClick={() => setDialog(true)} />
        <Anchor href="https://github.com/rnnyrk">
          <Github />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/ronny-rook-02ab1622/">
          <Linkedin />
        </Anchor>
        <Anchor href="https://twitter.com/rnnyrk">
          <Twitter />
        </Anchor>
      </SocialList>
    </>
  );
}

export default Social;
