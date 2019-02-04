import React, { useState } from 'react';

import { Content, Current, Next, Letter, TimelineContainer, Years } from './styled';

const Timeline = () => {
  const [visible, setVisible] = useState(false);

  return (
    <TimelineContainer>
      <Current>
        <Years>
          2018
        </Years>

        <Content>
          <p>Graduated Communication & Multimedia Design at The University of Amsterdam with a 9. I’ve got the oppertunity to work on a project at Label A and created a transport sharing platform for companies in big cities using React Native. With this project I was nominated for a Golden Dot Award (Best Student Work of the University). See my project for Huub - Next Urban Mobility.</p>
          <p>In June a signed a contract to start as a front-end developer at Label A. At Label A we create web- and mobile applications using the latest technologies. Within the front-end department we use React. In November I gave a talk on a meetup about performance in bigger front-end apps. You can read "How we optimized grocerie shopping" on my blog.</p>
        </Content>
      </Current>

      <Next
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <Letter
          visible={visible}
          dangerouslySetInnerHTML={{ __html: '<' }}
        />
        <Letter>n</Letter>
        <Letter visible={!visible}>e</Letter>
        <Letter>x</Letter>
        <Letter>t</Letter>
        <Letter
          visible={visible}
          dangerouslySetInnerHTML={{ __html: '/>' }}
        />
      </Next>
    </TimelineContainer>
  );
}

export default Timeline;
