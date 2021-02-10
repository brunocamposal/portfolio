import React from 'react';

import { Hr, Grid, Col, Image, Skill, Description } from './styles';
import { Container } from '../../components';
import { languages_and_frameworks } from './helper';

const AboutMe = () => {
  return (
    <>
      <Container
        id="about-me"
        color="var(--primary-font)"
        secundaryColor="#888888"
      >
        <h2> SOBRE MIM </h2>
        <Hr />
        <Description>
          <h4>
            Tenho 20 anos, e atualmente sou estudante da Kenzie Academy Brasil,
            curso que forma desenvolvedores full-stack. Eu gosto de séries,
            músicas, futebol, jogar video game e programar. Desde criança,
            tenho interesse na área da informática e minha vontade é trabalhar
            como desenvolvedor front-end, produzindo sites e sistemas.
          </h4>
        </Description>
        <p> Linguagens &amp; Frameworks </p>
        <Grid>
          {languages_and_frameworks.map(({ image, title, subtitle }, key) => (
            <Col key={key}>
              <Skill>
                <div>
                  <Image alt={title} src={image} />
                </div>
                <h3> {title} </h3>
                <h4> {subtitle} </h4>
              </Skill>
            </Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AboutMe;
