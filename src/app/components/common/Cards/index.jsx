import React from 'react';

import Title from 'common/Title';
import Card from './components/Card';
import CardContainer from './styled';

const Cards = () => (
  <CardContainer large>
    <Card>
      <Title>React Prime</Title>
      <p>Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </Card>

    <Card colors={['#7def4c', '#52cc1e']}>
      <Title>Styled Components</Title>
      <p>Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </Card>
  </CardContainer>
);

export default Cards;
