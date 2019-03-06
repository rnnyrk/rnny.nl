import React, { FC, useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import GlobalStyle from 'styles';
import * as t from 'types';

import { ColorContext } from 'services/context/ColorContext';
import { PoseContainer, PoseAnimation, PoseAnimation2 } from 'common/Animation';
import Home from 'modules/Home';
import About from 'modules/About';

const App:FC<AppProps> = ({ location }) => {
  const [color, setColor] = useState('purple');
  const [animation, setAnimation] = useState('default');

  useEffect(() => {
    window.scrollTo(0, 0)

    setAnimation('in');

    if (location.pathname === '/about') {
      setColor('white');
    } else {
      setColor('purple');
    }

    setTimeout(() => {
      setAnimation('out');
    }, 2000);
  }, [location.pathname]);

  return (
    <>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <ColorContext.Provider value={color}>
            <PoseGroup preEnterPose="before">
              <PoseContainer key={location.pathname}>
                <PoseAnimation pose={animation} />
                <PoseAnimation2 pose={animation} />
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} />}
                  />
                  <Route
                    path="/about"
                    render={(props) => <About {...props} />}
                  />
                </Switch>
              </PoseContainer>
            </PoseGroup>
          </ColorContext.Provider>
        )}
      />
    </>
  );
}

type AppProps = t.RouteComponentProps;

export default withRouter(App);
