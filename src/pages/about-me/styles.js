import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: white;
    font-weight: 700;
    font-size: 3.2rem;
    padding-bottom: 30px;
    font-family: 'Lato', sans-serif;
  }

  h2 {
    color: white;
    font-size: 1.8rem;
    font-family: 'Lato', sans-serif;
  }
`;

export const Perfil = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  background-color: white;
  margin-bottom: 15px;
`;
