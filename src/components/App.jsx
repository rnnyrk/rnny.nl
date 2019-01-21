import React, { createContext, useEffect, useContext } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalStyle from 'styles';

import Home from 'modules/Home';
import About from 'modules/About';

export const LocationContext = createContext(['', () => {}]);

const App = (props) => {
  const [location, setLocation] = useContext(LocationContext);

  useEffect(() => {
    console.log('props.location.pathname', props.location.pathname);
    setLocation(props.location.pathname);
    console.log('location', location);
  });

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
                  enter: 5000,
                  exit: 5000,
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
