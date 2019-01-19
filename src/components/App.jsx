import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalStyle from 'styles';

import Home from 'modules/Home';
import About from 'modules/About';

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Route
        render={({ location }) => {
          const { pathname, key } = location;

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
        }}
      />
    </main>
  );
}

export default withRouter(App);
