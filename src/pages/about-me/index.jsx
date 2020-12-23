import React from 'react';
import { Container, Perfil } from './styles';
import background from '../../media/background.jpg';
import perfil from '../../media/perfil.jpeg';

const AboutMe = () => {
  return (
    <>
      <Container image={background}>
        <h1> Bruno Alves </h1>
        <h2> Desenvolvedor Front-End </h2>
        {/* <Perfil image={perfil} />*/}
      </Container>
    </>
  );
};

export default AboutMe;
