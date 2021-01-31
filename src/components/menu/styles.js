import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  @media (max-width: 1300px) {
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

export const Item = styled.div`
  text-decoration: none;
  margin: 30px 0px 20px 40px;
  font-weight: 700;
  font-variant: normal;
  font-style: normal;
  font-size: 0.9em;
  cursor: pointer;;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  padding: 40px;
  position: sticky;
`;

export const Medias = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 35px;

  .icon {
    margin: 10px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--primary-font);

    &:hover {
      color: #0F77FA;
    }
  }
`;
