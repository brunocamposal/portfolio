import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faFolderOpen,
  faPhoneAlt,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Item, Title } from './styles';

const Menu = () => {
  return (
    <>
      <Container>
        <Nav>
          <Title>
            <FontAwesomeIcon icon={faLaptopCode} /> PORTFÓLIO
          </Title>
          <Item>
            <FontAwesomeIcon icon={faHome} /> HOME
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUser} /> SOBRE MIM
          </Item>
          <Item>
            <FontAwesomeIcon icon={faFolderOpen} /> MEUS PROJETOS
          </Item>
          <Item>
            <FontAwesomeIcon icon={faPhoneAlt} /> CONTATO
          </Item>
        </Nav>
      </Container>
    </>
  );
};

export default Menu;
