import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
}

const Button: React.FC<IButtonProps> = ({ textButton, children, ...rest }) => (
  <Container type="button" {...rest}>
    {textButton}
    {children}
  </Container>
);

export default Button;
