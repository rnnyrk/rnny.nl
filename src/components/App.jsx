import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import Home from 'modules/Home';
import About from 'modules/About';

const RouteContainer = styled(posed.div({
  before: {
    x: ({ direction }) => (direction === 'left' ? '100%' : '-100%'),
    transition: { duration: 500 },
    opacity: 1,
  },
  enter: {
    x: '0%',
    transition: { duration: 500 },
  },
  exit: {
    x: ({ direction }) => (direction === 'left' ? '-100%' : '100%'),
    transition: { duration: 500 },
    opacity: 0,
  },
}));

const App = (props) => {
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    if (props.location.pathname === '/about') {
      setDirection('left');
    } else {
      setDirection('right');
    }
  });

  return (
    <main>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <PoseGroup preEnterPose="before">
            <RouteContainer
              direction={direction}
              key={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        )}
      />
    </main>
  );
}

export default withRouter(App);
