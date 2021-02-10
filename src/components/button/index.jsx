import React from 'react';

import { StyledButton } from './styles';

const Button = ({ href, children, color, mr, hoverBg, hoverColor }) => {
  return (
    <StyledButton
      href={href}
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
