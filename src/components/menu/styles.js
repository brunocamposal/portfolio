import styled from 'styled-components';

export const Container = styled.div`
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17vw;
  height: 100vh;
  padding-top: 60px;
  overflow: auto;
  position: sticky;
`;

export const Item = styled.a`
  text-decoration: none;
  padding: 30px 30px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-variant: normal;
  font-style: normal;
  font-size: 0.9em;
`;

export const Title = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  padding-bottom: 40px;
`;
