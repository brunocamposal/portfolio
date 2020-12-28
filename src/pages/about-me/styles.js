import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary-bg);
  width: 82vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 200;
    font-size: 1.8rem;
    width: 60vw;
    margin: 30px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.3rem;
    width: 60vw;
    margin-bottom: 10px;
  }

  h4 {
    font-weight: 200;
    font-size: 1.2rem;
    color: #888888;
    width: 60vw;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 100%;
  }
`;

export const Hr = styled.div`
  width: 100px;
  height: 3px;
  background-color: var(--primary-font);
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  width: 60vw;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  width: 20vw;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  text-align: center;

  @media (max-width: 480px) {
    width: 60vw;
    height: 30vw;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  src: url(${(props) => props.image});
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;
