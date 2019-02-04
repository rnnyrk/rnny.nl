import React from 'react';

import { BioContainer, BioHeader, Photo, Title, Wave } from './styled';

const Bio = () => (
  <BioContainer>
    <BioHeader>
      <Photo />
      <Title>Hi, I’m Ronny! <Wave>👋</Wave></Title>
    </BioHeader>
    <p>I’m a JavaScript (mostly front-end) developer from Amsterdam, the Netherlands 🇳🇱. I’ve got a passion for design, kitesurfing, running, (oldskool) hiphop, (web) performance and - cutting-egde - web technologies such as React (Native), Progressive Web Apps, Styled Components and CSS Grid.</p>
  </BioContainer>
);

export default Bio;
