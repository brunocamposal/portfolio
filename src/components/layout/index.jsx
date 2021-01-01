import React from 'react';

import { Container, OnePage } from './styles';
import Menu from '../menu';
import { Main, AboutMe, MyProjects } from '../../pages';

const Layout = () => {
  return (
    <>
      <Menu />
      <Container>
        <OnePage>
          <Main />
          <AboutMe />
          <MyProjects />
        </OnePage>
      </Container>
    </>
  );
};

export default Layout;
