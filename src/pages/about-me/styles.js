import styled from 'styled-components';

export const Hr = styled.div`
  width: 100px;
  height: 3px;
  background-color: var(--primary-font);
  margin-bottom: 30px;
`;

export const Grid = styled.div`
  max-width: 900px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Col = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;;
  text-align: center;
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


export const Description = styled.div`
  width: 60vw;
`;