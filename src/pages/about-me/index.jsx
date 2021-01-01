import React from 'react';

import { Container, Hr, Grid, Col, Image, Skill } from './styles';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import python from '../../assets/images/python.png';

const AboutMe = () => {
  return (
    <>
      <Container>
        <h1> SOBRE MIM </h1>
        <Hr />
        <h4>
          Hello This is Eric Smith a Creative Freelance Designer and Front End
          Developer Based on Autralia, Melbourne I Have 6+ Years Experience in
          User Interface and User Experience Currently Work at Themeforest,
          Envato as a Freelance Designer. Hire me for more...{' '}
        </h4>
        <h2> Linguagens &amp; Frameworks </h2>
        <Grid>
          <Col>
            <Skill>
              <div>
                <Image alt="html" src={html} />
              </div>
              <h3> HTML </h3>
              <h4> HTML 5 </h4>
          
            </Skill>
          </Col>
          <Col>
            <Skill>
              <div>
                <Image alt="html" src={css} />
              </div>
              <h3> CSS </h3>
              <h4> Bootstrap, Semantic Ui </h4>
            </Skill>
          </Col>
          <Col>
            <Skill>
              <div>
                <Image alt="html" src={js} />
              </div>
              <h3> JS </h3>
              <h4> Javascript Vanilla </h4>
            </Skill>
          </Col>
          <Col>
            <Skill>
              <div>
                <Image alt="html" src={react} />
              </div>
              <h3> React JS </h3>
              <h4> Redux, Thunk, Styled Components </h4>
            </Skill>
          </Col>
          <Col>
            <Skill>
              <div>
                <Image alt="html" src={python} />
              </div>
              <h3> Python </h3>
              <h4> Flask, Jinja </h4>
            </Skill>
          </Col>
        </Grid>
      </Container>
    </>
  );
};

export default AboutMe;
