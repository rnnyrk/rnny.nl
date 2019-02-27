import React, { useState } from 'react';

import data from './data';
import { Content, TimelineContainer, TimelineContent, Years, YearNumber } from './styled';

const Timeline = () => {
  const [visible, setVisible] = useState(false);
  const [year, setYear] = useState(2018);

  return (
    <TimelineContainer>
      <Years>
        {data.timeline.map((current) => (
          <YearNumber active={current.year === year}>{current.year}</YearNumber>
        ))}
      </Years>

      <TimelineContent>
        {data.timeline.map((current) => (
          <Content
            active={current.year === year}
            dangerouslySetInnerHTML={{ __html: current.text }}
          />
        ))}
      </TimelineContent>
    </TimelineContainer>
  );
}

{/* <Next
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
</Next> */}

export default Timeline;
