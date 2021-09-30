import { Form } from '@unform/web';
import React from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { IUserProps, useAuth } from '../../hooks/auth';

import { Container } from './styles';

const SignUp: React.FC = () => {
  const { signUp } = useAuth();

  const handleSubmit = async (formData: Omit<IUserProps, 'id' | 'avatar'>) => {
    try {
      await signUp(formData);
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Cadastrar-se</h3>
        <h5>Informações do Usuário</h5>
        <Input type="text" name="name" labelText="Nome:" icon={FiUser} />
        <Input type="email" name="email" labelText="E-mail:" icon={FiMail} />
        <Input
          type="password"
          name="password"
          labelText="Senha:"
          icon={FiLock}
        />
        <Input type="text" name="cpf" labelText="CPF:" icon={FiUser} />
        <Input type="text" name="rg" labelText="RG:" icon={FiUser} />
        <Input type="text" name="phone" labelText="Telefone:" icon={FiUser} />
        <Input
          type="text"
          name="date_birthday"
          labelText="Data de Nascimento:"
          icon={FiUser}
        />
        <h5>Informações de Endereço</h5>
        <Input type="text" name="city" labelText="Cidade:" icon={FiUser} />
        <Input type="text" name="state" labelText="Estado:" icon={FiUser} />
        <Input type="text" name="zipcode" labelText="CEP:" icon={FiUser} />
        <Input type="text" name="street" labelText="Rua:" icon={FiUser} />
        <Input
          type="text"
          name="street_number"
          labelText="Número da residencia:"
          icon={FiUser}
        />
        <Input
          type="text"
          name="neighborhood"
          labelText="Bairro:"
          icon={FiUser}
        />
        <Button type="submit" textButton="Cadastrar" />
        <Link to="/login">Já possui uma conta? Faça login!</Link>
      </Form>
    </Container>
  );
};

export default SignUp;
