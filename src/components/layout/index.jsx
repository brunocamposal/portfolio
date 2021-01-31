import React from 'react';

import { Container, OnePage } from './styles';
import { Main, AboutMe, MyProjects } from '../../pages';

const Layout = () => {
  return (
    <>
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
