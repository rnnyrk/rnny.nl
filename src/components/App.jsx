import React, { PureComponent, lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import GlobaStyle from 'styles';

import Header from 'common/Header';
import Loading from 'common/Loading';
import RouteContainer from 'common/RouteContainer/styled';

const Home = lazy(() => import('modules/Home'));
const Cv = lazy(() => import('modules/Cv'));
const Work = lazy(() => import('modules/Work'));

class App extends PureComponent {
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
        <GlobaStyle />
        <main>
          <Header scrolledPage={scrolledPage} />
          <Suspense fallback={<Loading>Loading...</Loading>}>
            <Route render={({ location }) => (
              <PoseGroup preEnterPose="before">
                <RouteContainer
                  direction="left"
                  key={location.pathname}
                >
                  <Switch location={location}>
                    <Route path="/" component={Home} exact />
                    <Route path="/cv" component={Cv} />
                    <Route path="/work" component={Work} />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            )} />
          </Suspense>
        </main>
      </>
    );
  }
}

export default withRouter(App);
