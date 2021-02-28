import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faFolderOpen,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Container, Nav, Item, Title, Medias } from './styles';
import { Link } from 'react-scroll';

const Menu = () => {
  return (
    <>
      <Container>
        <Title>
          <FontAwesomeIcon icon={faLaptopCode} />
          <Link to="home" spy={true} smooth={true} duration={500}>
            PORTFÓLIO
          </Link>
        </Title>
        <Nav>
          <Item>
            <FontAwesomeIcon icon={faHome} />
            <Link to="home" spy={true} smooth={true} duration={500}>
              HOME
            </Link>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUser} />
            <Link to="about-me" spy={true} smooth={true} duration={500}>
              SOBRE MIM
            </Link>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faFolderOpen} />
            <Link to="my-projects" spy={true} smooth={true} duration={500}>
              MEUS PROJETOS
            </Link>
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
