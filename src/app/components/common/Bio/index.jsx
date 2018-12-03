import React from 'react';

import { BioTitle, Content, Image, Wrapper } from './styled';

const Bio = () => (
  <Wrapper>
    <Image />
    <Content>
      <BioTitle center>Hi, I'm Ronny Rook</BioTitle>
      <p>Feel free to send me a message.</p>
    </Content>
  </Wrapper>
);

export default Bio;