import React, { useState, useRef } from 'react';

import data from './data';
import { isTablet } from 'services/devices';
import { InterestsContainer, InterestBox, HoverImage, List, Title } from './styled';

const Interests = () => {
  const [visible, setVisible] = useState(false);
  const imageEl = useRef(null);
  const interestsEl = useRef(null);

  const hoverImage = (image) => {
    if (image) {
      setVisible(true);
      imageEl.current.src = image;
    } else {
      setVisible(false);
    }
  };

  const followMouse = (event) => {
    if (isTablet()) return;

    const interestsRect = interestsEl.current.getBoundingClientRect();

    Object.assign(imageEl.current.style, {
      left: `${(event.pageX - interestsRect.left) + 15}px`,
      top: `${(event.pageY - document.documentElement.scrollTop - interestsRect.top) + 15}px`,
    });
  };

  return (
    <InterestsContainer ref={interestsEl}>
      {!isTablet() && (
        <HoverImage
          ref={imageEl}
          pose={visible ? 'visible' : 'hidden'}
        />
      )}

      <InterestBox>
        <Title>Best books I've read</Title>
        <List>
          {data.books.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => hoverImage(item.image)}
              onMouseLeave={() => hoverImage(false)}
              onMouseMove={(event) => followMouse(event)}
            >
              {item.title}
            </li>
          ))}
        </List>
      </InterestBox>

      <InterestBox>
        <Title>Series I'd really enjoy</Title>
        <List>
          {data.shows.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => hoverImage(item.image)}
              onMouseLeave={() => hoverImage(false)}
              onMouseMove={(event) => followMouse(event)}
            >
              {item.title}
            </li>
          ))}
        </List>
      </InterestBox>

      <InterestBox>
        <Title>Most valuable bookmarks</Title>
        <List>
          {data.links.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" title={item.title}>
                {item.title}
              </a>
            </li>
          ))}
        </List>
      </InterestBox>
    </InterestsContainer>
  );
}

export default Interests;
