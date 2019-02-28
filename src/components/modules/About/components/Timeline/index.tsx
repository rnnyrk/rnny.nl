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
            key={`year_${current.id}`}
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
            key={`content_${current.id}`}
            pose={current.year === year ? 'visible' : 'hidden'}
            dangerouslySetInnerHTML={{ __html: current.text }}
          />
        ))}
      </TimelineContent>
    </TimelineContainer>
  );
}

export default Timeline;
