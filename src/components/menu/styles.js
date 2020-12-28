import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 17vw;
  height: 100vh;
  overflow: auto;
`;

export const Item = styled.a`
  text-decoration: none;
  padding: 30px 0px 20px 40px;
  font-weight: 700;
  font-variant: normal;
  font-style: normal;
  font-size: 0.9em;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  padding: 40px;
  position: sticky;
`;
