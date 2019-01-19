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
          const { pathname } = location;

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
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
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
