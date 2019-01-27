import React from 'react';

import TwitterIcon from 'vectors/twitter.svg';
import LinkedinIcon from 'vectors/linkedin.svg';

import { SocialLink, Wrapper } from './styled';

const Socials = () => (
  <Wrapper>
    <SocialLink
      href="https://twitter.com/rnnyrk"
      type="twitter"
    >
      <TwitterIcon />
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/ronny-rook-02ab1622/"
      type="linkedin"
    >
      <LinkedinIcon />
    </SocialLink>
  </Wrapper>
);

export default Socials;