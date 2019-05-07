import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTransition } from 'react-spring';

import * as t from 'types';
import GlobalStyle from 'styles';

import { ColorContext } from 'services/context/ColorContext';
import useRouter from 'services/hooks/useRouter';
import Home from 'modules/Home';
import About from 'modules/About';
import { AnimationWrapper } from 'common';

const App = () => {
  const [color, setColor] = useState<t.ColorType>('purple');

  const { location } = useRouter();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translateY(-100vh)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20vh)' },
  });

  useEffect(() => {
    window.scrollTo(0, 0)

    if (location.pathname === '/about') {
      setColor('white');
    } else {
      setColor('purple');
    }
  }, [location.pathname]);

  return (
    <>
      <GlobalStyle />
      <ColorContext.Provider value={color}>
        {transitions.map(({ item, props, key }) => (
          <AnimationWrapper key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" render={Home} />
              <Route path="/about" render={About} />
            </Switch>
          </AnimationWrapper>
        ))}
      </ColorContext.Provider>
    </>
  );
}

export default App;
