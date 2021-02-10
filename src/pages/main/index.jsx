import React from 'react';
import { Buttons } from './styles';
import { Container, Button } from '../../components';
import background from '../../assets/images/background.jpg';
import { Link } from 'react-scroll';

const Main = () => {
  return (
    <>
      <Container image={background} color="white" id="home">
        <h1> Bruno Alves </h1>
        <h2> Desenvolvedor Front-End </h2>
        <Buttons>
          <Link to="about-me" spy={true} smooth={true} duration={500}>
            <Button color="white" mr="15px" hoverBg="white" hoverColor="black">
              Quem sou eu
            </Button>
          </Link>
          <Button
            href="https://drive.google.com/file/d/1mYTn9syNzzZCA3JKCJGZ-zqhGM2oYc1Z/view?usp=sharing"
            color="white"
            mr="15px"
            hoverBg="white"
            hoverColor="black"
          >
            Curriculo
          </Button>
        </Buttons>
      </Container>
    </>
  );
};

export default Main;
