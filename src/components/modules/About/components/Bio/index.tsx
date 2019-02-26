import React from 'react';

// @ts-ignore
import Ronny from 'images/ronny-rook.png?external';

import { BioContainer, BioHeader, Photo, Title, Wave } from './styled';

const Bio = () => (
  <BioContainer>
    <BioHeader>
      <Photo>
        <img src={Ronny} alt="Photo of Ronny" />
      </Photo>
      <Title>Hi, I’m Ronny! <Wave>👋</Wave></Title>
    </BioHeader>
    <p>I’m a JavaScript developer from Amsterdam, the Netherlands 🇳🇱. I’ve got a passion for design, kitesurfing, running, (oldskool) hiphop, (web) performance and - cutting-egde - web technologies such as React (Native), Progressive Web Apps, Styled Components and CSS Grid. This website is build using Webpack, Typescript, React Hooks, React Pose &amp; CSS Grid.</p>
  </BioContainer>
);

export default Bio;
