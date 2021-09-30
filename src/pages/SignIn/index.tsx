import { Form } from '@unform/web';
import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ICredentialsSignInProps, useAuth } from '../../hooks/auth';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSubmit = async (formData: ICredentialsSignInProps) => {
    try {
      await signIn(formData);
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Autenticar-se</h3>
        <Input name="email" type="email" labelText="E-mail:" icon={FiMail} />
        <Input
          name="password"
          type="password"
          labelText="Senha:"
          icon={FiLock}
        />
        <Button type="submit" textButton="Entrar" />
        <Link to="/register">Não possui conta? Registre-se</Link>
      </Form>
    </Container>
  );
};

export default SignIn;
