import React from 'react';

import { StyledContainer } from './styles';

const Container = ({ id, children, image, bgColor, color, secundaryColor }) => {
  return (
    <>
      <StyledContainer
        id={id}
        secundaryColor={secundaryColor}
        image={image}
        color={color}
        bgColor={bgColor}
      >
        {children}
      </StyledContainer>
    </>
  );
};

export default Container;
