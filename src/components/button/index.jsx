import React from 'react';

import { StyledButton } from './styles';

const Button = ({ children, color, mr, hoverBg, hoverColor }) => {
  return (
    <StyledButton
      color={color}
      mr={mr}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
