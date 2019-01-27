import React, { useState, useRef } from 'react';

import CreativityInc from 'images/creativity-inc.jpg?external';
import PowerOfHabit from 'images/power-of-habit.jpg?external';

import { InterestsContainer, InterestBox, HoverImage, List, Title } from './styled';

// Add Typescript

const Interests = () => {
  const [visible, setVisible] = useState(false);
  const imageEl = useRef(null);

  const hoverImage = (image) => {
    if (image) {
      setVisible(true);
      imageEl.current.src = image;
    } else {
      setVisible(false);
    }
  };

  const followMouse = (event) => {
    imageEl.current.style.left = `${event.clientX - 20}px`;
    imageEl.current.style.top = `${event.clientY + 60}px`;
  };

  return (
    <InterestsContainer>
      <HoverImage
        ref={imageEl}
        pose={visible ? 'visible' : 'hidden'}
      />

      <InterestBox>
        <Title>Best books I've read</Title>
        <List>
          <li
            onMouseEnter={() => hoverImage(CreativityInc)}
            onMouseLeave={() => hoverImage(false)}
            onMouseMove={(event) => followMouse(event)}
          >Creativity Inc.</li>
          <li
            onMouseEnter={() => hoverImage(PowerOfHabit)}
            onMouseLeave={() => hoverImage(false)}
            onMouseMove={(event) => followMouse(event)}
          >Power of Habit</li>
          <li>Hooked</li>
        </List>
      </InterestBox>

      <InterestBox>
        <Title>Best series I've seen</Title>
        <List>
          <li>Game of Thrones</li>
          <li>Westworld</li>
          <li>Master of None</li>
        </List>
      </InterestBox>

      <InterestBox>
        <Title>My favorite bookmarks</Title>
        <List>
          <li>The Costs of Javascript</li>
          <li>The Offline Cookbook</li>
          <li>Complete Guide to Grid</li>
        </List>
      </InterestBox>
    </InterestsContainer>
  );
}

export default Interests;
