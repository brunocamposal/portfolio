import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faFolderOpen,
  faPhoneAlt,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Container, Nav, Item, Title, Medias } from './styles';

const Menu = () => {
  return (
    <>
      <Container>
        <Title>
          <FontAwesomeIcon icon={faLaptopCode} /> PORTFÓLIO
        </Title>
        <Nav>
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
          <Medias>
            <a href="https://github.com/brunocamposal">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://gitlab.com/brunocamposal">
              <FontAwesomeIcon icon={faGitlab} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/brunocamposal/">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </Medias>
        </Nav>
      </Container>
    </>
  );
};

export default Menu;
