import React from 'react';
import GlobalStyles from './styles/global';
import { Menu, Layout, Main } from './components';
import { AboutMe } from './pages';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AboutMe />
      </Layout>
    </>
  );
};

export default App;
