import React, { useState } from 'react';

import data from './data';
import { Content, TimelineContainer, TimelineContent, Years, YearNumber } from './styled';

const Timeline = () => {
  const [year, setYear] = useState(2018);

  return (
    <TimelineContainer>
      <Years>
        {data.timeline.map((current) => (
          <YearNumber
            active={current.year === year}
            onClick={() => setYear(current.year)}
          >
            {current.year}
          </YearNumber>
        ))}
      </Years>

      <TimelineContent>
        {data.timeline.map((current) => (
          <Content
            pose={current.year === year ? 'visible' : 'hidden'}
            dangerouslySetInnerHTML={{ __html: current.text }}
          />
        ))}
      </TimelineContent>
    </TimelineContainer>
  );
}

export default Timeline;
