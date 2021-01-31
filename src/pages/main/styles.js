import styled from 'styled-components';


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


