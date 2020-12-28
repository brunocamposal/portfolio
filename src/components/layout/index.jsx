import React from 'react';

import { Container, OnePage } from './styles';
import Menu from '../menu';
import { Main, AboutMe } from '../../pages';

const Layout = () => {
  return (
    <>
      <Menu />
      <Container>
        <OnePage>
          <Main />
          <AboutMe />
          olawewe
        </OnePage>
      </Container>
    </>
  );
};

export default Layout;
