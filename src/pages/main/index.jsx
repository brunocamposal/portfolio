import React from 'react';
import { Container, Buttons, Button } from './styles';
import background from '../../assets/images/background.jpg';

const Main = () => {
  return (
    <>
      <Container image={background}>
        <h1> Bruno Alves </h1>
        <h2> Desenvolvedor Front-End </h2>
        <Buttons>
          <Button> Quem sou eu </Button>
          <Button> Curriculo </Button>
        </Buttons>
        {/* <Perfil image={perfil} />*/}
      </Container>
    </>
  );
};

export default Main;
