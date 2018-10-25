import React, { PureComponent } from 'react';

import Header from 'common/Header';
import Container from 'common/Container';
import Cards from 'common/Cards';
import Title from 'common/Title';
import { IntroTitle } from './styled';

class Home extends PureComponent {
  state = {
    scrolledPage: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 10 && !this.state.scrolledPage) {
      this.setState({ scrolledPage: true });
      document.body.classList.add('scrolled');
    } else if (scrollY < 10 && this.state.scrolledPage) {
      this.setState({ scrolledPage: false });
      document.body.classList.remove('scrolled');
    }
  }

  render() {
    const { scrolledPage } = this.state;

    return (
      <>
        <Header scrolledPage={scrolledPage} />
        <Container>
          <IntroTitle center>Hi, I'm Ronny</IntroTitle>
          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </Container>
        <Cards />
        <Container>
          <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        </Container>
      </>
    );
  }
}

export default Home;
