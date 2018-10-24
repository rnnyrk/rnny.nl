import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobaStyle from 'styles';

import Home from 'modules/Home';

const App = () => (
  <Fragment>
    <GlobaStyle />
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  </Fragment>
);

export default App;
