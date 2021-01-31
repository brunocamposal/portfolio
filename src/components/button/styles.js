import styled from 'styled-components';

export const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 25px;
  text-decoration: none;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  margin-right: ${(props) => (props.mr ? props.mr : '0px')};
  border-radius: 3px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverColor};
  }
`;
