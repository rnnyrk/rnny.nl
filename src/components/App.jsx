import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import GlobalStyle from 'styles';

import { ColorContext } from 'services/context/ColorContext';
import { PoseBackground, PoseContainer } from 'common/Animation';
import Home from 'modules/Home';
import About from 'modules/About';

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
    <PoseBackground pose={color}>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <ColorContext.Provider value={color}>
            <PoseGroup preEnterPose="before">
              <PoseContainer key={location.pathname}>
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
              </PoseContainer>
            </PoseGroup>
          </ColorContext.Provider>
        )}
      />
    </PoseBackground>
  );
}

export default withRouter(App);
