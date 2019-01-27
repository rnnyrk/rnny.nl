import React from 'react';

import { InterestsContainer, InterestBox, List, Title } from './styled';

const Interests = () => (
  <InterestsContainer>
    <InterestBox>
      <Title>Best books I've read</Title>
      <List>
        <li>Creativity Inc.</li>
        <li>Power of Habit</li>
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

export default Interests;
