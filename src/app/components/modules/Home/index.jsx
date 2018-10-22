import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const CenteredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  svg {
    margin: 50px 0;
  }
`;

const Text = styled.h1`
  font-size: 32px;
`;

const Home = () => (
  <CenteredSection>
    <Text>Ronny Rook</Text>
  </CenteredSection>
);

export default Home;
