import React from 'react';
import GlobalStyles from './styles/global';
import { Layout, Menu } from './components';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </>
  );
};

export default App;
