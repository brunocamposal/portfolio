import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-image: ${({ image }) =>
    image &&
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${image})`};
  background-repeat: ${({ image }) => image && 'no-repeat'};
  background-size: ${({ image }) => image && 'cover'};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'var(--primary-bg)'};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0px;
  text-align: center;

  h1 {
    color: ${({ color }) => color};
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 20px;
  }

  h2 {
    color: ${({ color }) => color};
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  h3 {
    color: ${({ color }) => color};
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  h4 {
    color: ${({ secundaryColor }) => secundaryColor};
    font-weight: 200;
    font-size: 1.2rem;
    margin-bottom: 40px;
  }

  p {
    color: ${({ color }) => color};
    font-size: 1.8rem;
    margin-bottom: 40px;
  }

  @media (max-width: 1300px) {
    width: 100vw;
    height: auto;
  }
`;
