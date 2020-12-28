import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 17vw;

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const OnePage = styled.div`
  display: flex;
  flex-direction: column;
`;

