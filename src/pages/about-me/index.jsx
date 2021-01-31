import React from 'react';

import { Hr, Grid, Col, Image, Skill, Description } from './styles';
import { Container } from '../../components';
import { languages_and_frameworks } from './helper';

const AboutMe = () => {
  return (
    <>
      <Container id="about-me" color="var(--primary-font)" secundaryColor="#888888">
        <h2> SOBRE MIM </h2>
        <Hr />
        <Description>
          <h4>
            Hello This is Eric Smith a Creative Freelance Designer and Front End
            Developer Based on Autralia, Melbourne I Have 6+ Years Experience in
            User Interface and User Experience Currently Work at Themeforest,
            Envato as a Freelance Designer. Hire me for more...
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
