import React from 'react';

import { BioTitle, Content, Image, Wrapper } from './styled';

const Bio = () => (
  <Wrapper>
    <Image />
    <Content>
      <BioTitle>Hi, I'm Ronny Rook</BioTitle>
      <p>Here you can find what's on my mind.</p>
    </Content>
  </Wrapper>
);

export default Bio;