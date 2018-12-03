import React from 'react';

import Title from 'common/Title';

import Card from './components/Card';
import { CardsContainer } from './styled';

const Cards = () => (
  <CardsContainer>
    <Card>
      <Title>React Prime</Title>
      <p>Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </Card>

    <Card colors={['#101010', '#2f2f2f']}>
      <Title>Label A</Title>
    </Card>
  </CardsContainer>
);

export default Cards;
