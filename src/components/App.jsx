import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const Home = lazy(() => import('modules/Home'));
const About = lazy(() => import('modules/About'));

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Suspense fallback={<span>loading</span>}>
        <Switch>
          <Route path="/" component={(props) => <Home {...props} />} exact />
          <Route path="/about" component={(props) => <About {...props} />} exact />
        </Switch>
      </Suspense>
    </main>
  );
}

export default withRouter(App);
