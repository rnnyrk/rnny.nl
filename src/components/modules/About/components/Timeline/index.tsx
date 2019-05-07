import React, { useState } from 'react';
import { useSprings } from 'react-spring';

import data from './data';
import { Content, TimelineContainer, TimelineContent, Years, YearNumber } from './styled';

const Timeline = () => {
  const [year, setYear] = useState(2018);

  console.log(year);

  const [springs] = useSprings(data.timeline.length, (i) => console.log('match', data.timeline[i].year) || ({
    opacity: data.timeline[i].year === year ? 1 : 0,
    top: data.timeline[i].year === year ? '0px' : '30px',
  }));

  return (
    <TimelineContainer>
      <Years>
        {data.timeline.map((current: YearProps) => (
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
        {springs.map(({ top, opacity }, i) => console.log(opacity) || (
          <Content
            key={`content_${data.timeline[i].id}`}
            style={{
              opacity,
              top,
            }}
            dangerouslySetInnerHTML={{ __html: data.timeline[i].text }}
          />
        ))}
      </TimelineContent>
    </TimelineContainer>
  );
}

type YearProps = {
  id: number;
  year: number;
  text: string;
}

export default Timeline;
