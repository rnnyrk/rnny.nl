import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalStyle from 'styles';

const Home = lazy(() => import('modules/Home'));
const About = lazy(() => import('modules/About'));

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Suspense fallback={<span>loading</span>}>
        <Route render={({ location }) => {
          const { pathname, key } = location;
          console.log(pathname, key);

          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={{
                  enter: 500,
                  exit: 500,
                }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route path="/" exact component={(props) => <Home {...props} />}  />
                      <Route path="/about" component={(props) => <About {...props} />} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }} />
      </Suspense>
    </main>
  );
}

export default withRouter(App);
