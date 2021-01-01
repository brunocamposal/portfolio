import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary-bg);
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 2.2rem;
  }

  h2 {
    font-weight: 200;
    font-size: 1.8rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.3rem;
  }

  h4 {
    font-weight: 200;
    font-size: 1.2rem;
    color: #888888;
    padding-top: 15px;
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
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 35px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  position: relative;
  margin: 8px;

  @media (max-width: 480px) {
    height: 60vw;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  src: url(${(props) => props.image});
  background-size: cover;
  width: 360px;
  height: 240px;
  opacity: url(${(props) => props.opacity});
`;

export const Description = styled.div`
  width: 360px;
  height: 240px;
  padding-top: 30px;
  background-color: var(--primary-bg);
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 25px;
  text-decoration: none;
  border: 1px solid var(--primary-font);
  color: var(--primary-font);
  cursor: pointer;
`;
