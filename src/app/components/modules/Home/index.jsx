import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'common/Container';
import Cards from 'common/Cards';
import { IntroTitle } from './styled';

const Home = () => (
  <>
    <Container>
      <IntroTitle center>Hi, I'm Ronny</IntroTitle>
      <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
    </Container>
    <Cards />
    <Container>
      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
      <Link to="/cv">Go to CV</Link>
    </Container>
  </>
);

export default Home;
