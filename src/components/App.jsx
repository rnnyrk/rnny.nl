import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import GlobalStyle from 'styles';

import Home from 'modules/Home';
import About from 'modules/About';

import { Background, RouteContainer } from './styled';

const App = (props) => {
  const [color, setColor] = useState('purple');

  useEffect(() => {
    if (props.location.pathname === '/about') {
      setColor('white');
    } else {
      setColor('purple');
    }
  }, [props.location.pathname]);

  return (
    <Background pose={color === 'purple' ? 'purple' : 'white'}>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <PoseGroup preEnterPose="before">
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={props => <Home {...props} />}
                />
                <Route
                  path="/about"
                  render={props => <About {...props} />}
                />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        )}
      />
    </Background>
  );
}

export default withRouter(App);
