import React, { useState, useRef } from 'react';

import data from './data';
import { InterestsContainer, InterestBox, HoverImage, List, Title } from './styled';

// Add Typescript

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
    const interestsRect = interestsEl.current.getBoundingClientRect();

    Object.assign(imageEl.current.style, {
      left: `${(event.pageX - interestsRect.left) + 10}px`,
      top: `${(event.pageY - interestsRect.top) + 10}px`,
    });
  };

  return (
    <InterestsContainer ref={interestsEl}>
      <HoverImage
        ref={imageEl}
        pose={visible ? 'visible' : 'hidden'}
      />

      <InterestBox>
        <Title>Best books I've read</Title>
        <List>
          {data.books.map((item) => (
            <li
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
        <Title>Best series I've seen</Title>
        <List>
          {data.shows.map((item) => (
            <li
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
        <Title>My favorite bookmarks</Title>
        <List>
          {data.links.map((item) => (
            <li>
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
