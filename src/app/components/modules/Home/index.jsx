import React from 'react';

import { AnchorButton } from 'common/Button';
import Bio from 'common/Bio';
import Cards from 'common/Cards';
import Container from 'common/Container';

const Home = () => (
  <>
    <Container>
      <Bio />
      <p>Front-end developer from the Netherlands, based in Amsterdam. I've got a passion to build awesome applications for the web. I like using techniques such as React (Native), Progressive Web Apps, Styled Components and I got a big interest for performance.</p>
    </Container>
    <Cards />
    <Container>
      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
      <AnchorButton to="/cv">Go to CV</AnchorButton>
    </Container>
  </>
);

export default Home;
