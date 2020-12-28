import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1f1f1;
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
    font-size: 1.2rem;
    color: #888888;
    width: 60vw;
    margin-bottom: 40px;
  }
`;

export const Hr = styled.div`
  width: 100px;
  height: 3px;
  background-color: var(--primary);
  margin-bottom: 40px;
`;
