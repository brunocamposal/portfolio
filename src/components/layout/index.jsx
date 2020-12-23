import React from 'react';

import { Container } from './styles';
import Menu from '../menu';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Menu />
        {children}
      </Container>
    </>
  );
};

export default Layout;
