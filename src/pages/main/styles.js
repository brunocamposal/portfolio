import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 82vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  h1 {
    color: white;
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 20px;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 25px;
  text-decoration: none;
  color: white;
  border: 1px solid white;
  margin-right: 15px;
  border-radius: 3px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;
