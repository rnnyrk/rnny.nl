import React, { PureComponent } from 'react';

import Header from 'common/Header';
import Container from 'common/Container';
import Cards from 'common/Cards';

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

    if (scrollY >= 40 && !this.state.scrolledPage) {
      this.setState({ scrolledPage: true });
      document.body.classList.add('scrolled');
    } else if (scrollY < 40 && this.state.scrolledPage) {
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
          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </Container>
        <Cards />
        <Container>
          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </Container>
      </>
    );
  }
}

export default Home;
