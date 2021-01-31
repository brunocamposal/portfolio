import React, { useState } from 'react';

import {
  ButtonContainer,
  Hr,
  Grid,
  Col,
  Image,
  Description,
} from './styles';
import { motion } from 'framer-motion';
import skambo from '../../assets/images/skambo.png';
import book_book from '../../assets/images/book_book.png';
import register_user from '../../assets/images/register_user.png';
import lig_4 from '../../assets/images/lig_4.png';
import fb_kenzie from '../../assets/images/fb_kenzie.png';
import torre_de_hanoi from '../../assets/images/torre_de_hanoi.png';
import { Button, Container } from '../../components';

const MyProjects = () => {
  const [hoverEffect, setHoverEffect] = useState({
    skambo: false,
    book_book: false,
    register_user: false,
    fb_kenzie: false,
    lig_4: false,
    torre_de_hanoi: false,
  });

  const projects = [
    {
      name: 'Skambo - Sistema de trocas',
      languages: 'React JS / Redux / Thunk / Typescript',
      image: skambo,
      hover: hoverEffect.skambo,
      setHoverEnter: () => setHoverEffect({ skambo: true }),
      setHoverLeave: () => setHoverEffect({ skambo: false }),
      link: 'https://skambo.vercel.app/',
      repo: 'https://github.com/brunocamposal/skambo',
    },
    {
      name: 'Book Book - Rede Social de Livros',
      languages: 'React JS / Redux / Thunk ',
      image: book_book,
      hover: hoverEffect.book_book,
      setHoverEnter: () => setHoverEffect({ book_book: true }),
      setHoverLeave: () => setHoverEffect({ book_book: false }),
      link: 'https://book-book-swart.vercel.app/',
      repo: 'https://gitlab.com/brunocamposal/book-book',
    },
    {
      name: 'Jogo Torre de Hanói ',
      languages: 'HTML / CSS / JavaScript',
      image: torre_de_hanoi,
      hover: hoverEffect.torre_de_hanoi,
      setHoverEnter: () => setHoverEffect({ torre_de_hanoi: true }),
      setHoverLeave: () => setHoverEffect({ torre_de_hanoi: false }),
    },
    {
      name: 'Mockup Facebook Kenzie',
      languages: 'HTML / CSS / JavaScript',
      image: fb_kenzie,
      hover: hoverEffect.fb_kenzie,
      setHoverEnter: () => setHoverEffect({ fb_kenzie: true }),
      setHoverLeave: () => setHoverEffect({ fb_kenzie: false }),
      link: 'https://brunocamposal.gitlab.io/assessment-socialmockup/',
      repo: 'https://gitlab.com/brunocamposal/assessment-socialmockup',
    },
    {
      name: 'Jogo Lig 4',
      languages: 'HTML / CSS / JavaScript',
      image: lig_4,
      hover: hoverEffect.lig_4,
      setHoverEnter: () => setHoverEffect({ lig_4: true }),
      setHoverLeave: () => setHoverEffect({ lig_4: false }),
      link: 'https://brunocamposal.gitlab.io/lig-4/',
      repo: 'https://gitlab.com/brunocamposal/lig-4',
    },

    {
      name: 'Cadastro de Usuário Kenzie',
      languages: 'React JS / Redux / Thunk ',
      image: register_user,
      hover: hoverEffect.register_user,
      setHoverEnter: () => setHoverEffect({ register_user: true }),
      setHoverLeave: () => setHoverEffect({ register_user: false }),
      link: 'https://cadastrodeusuario-henrique-e-bruno.vercel.app/',
      repo:
        'https://gitlab.com/brunocamposal/cadastro-de-usu-rio-integra-o-com-api',
    },
  ];

  return (
    <>
      <Container id="my-projects" color="var(--primary-font)">
        <h2> MEUS PROJETOS</h2>
        <Hr />
        <Grid>
          {projects.map(
            (
              {
                name,
                languages,
                image,
                hover,
                setHoverEnter,
                setHoverLeave,
                link,
              },
              key
            ) => (
              <Col key={key}>
                <Image src={image} />
                <motion.div
                  whileHover={{
                    opacity: 1,
                  }}
                  initial={{ opacity: 0 }}
                  onHoverStart={setHoverEnter}
                  onHoverEnd={setHoverLeave}
                >
                  <Description>
                    {hover && (
                      <>
                        <motion.div
                          initial={{ y: 0 }}
                          animate={{ y: 20 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3> {name} </h3>
                          <h4> {languages} </h4>
                        </motion.div>
                        <motion.div
                          animate={{ y: -50 }}
                          transition={{ delay: 0.1, type: 'tween' }}
                        >
                          <ButtonContainer>
                            <Button
                              href={link}
                              hoverColor="white"
                              hoverBg="#31393C"
                              color="black"
                            >
                              Ver Projeto
                            </Button>
                          </ButtonContainer>
                        </motion.div>
                      </>
                    )}
                  </Description>
                </motion.div>
              </Col>
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default MyProjects;
