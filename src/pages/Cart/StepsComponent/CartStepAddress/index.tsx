import { Form } from '@unform/web';
import React, { useEffect } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { IUserProps, useAuth } from '../../../../hooks/auth';

import { Container } from './styles';

const CartStepAddress: React.FC = () => {
  const { user, updateUser } = useAuth();

  const handleSubmit = async (formData: IUserProps) => {
    const { name, cpf, address, date_birthday, email, phone, rg } = formData;

    console.log(formData);

    try {
      if (
        user.name === name &&
        cpf === user.cpf &&
        date_birthday === user.date_birthday &&
        email === user.email &&
        phone === user.phone &&
        rg === user.rg &&
        address.zipcode === user.address.zipcode &&
        address.city === user.address.city &&
        address.state === user.address.state &&
        address.street === user.address.street &&
        address.street_number === user.address.street_number &&
        address.neighborhood === user.address.neighborhood
      ) {
        console.log('Não possui nenhuma informação para ser atualizada');
        return;
      }

      await updateUser(formData);
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={{
          ...user,
          zipcode: user.address.zipcode,
          street: user.address.street,
          street_number: user.address.street_number,
          neighborhood: user.address.neighborhood,
          city: user.address.city,
          state: user.address.state,
        }}
      >
        <h3>Informações do Usuário</h3>
        <Input type="text" name="name" labelText="Nome:" />
        <Input type="text" name="email" labelText="E-mail:" />
        <Input type="text" name="cpf" labelText="CPF:" />
        <Input type="text" name="rg" labelText="RG:" />
        <Input type="text" name="phone" labelText="Telefone:" />
        <Input
          type="text"
          name="date_birthday"
          labelText="Data de Nascimento:"
        />
        <h3>Informações de Endereço</h3>
        <Input type="text" name="zipcode" labelText="CEP:" />
        <Input type="text" name="street" labelText="Rua:" />
        <Input type="text" name="street_number" labelText="Número:" />
        <Input type="text" name="neighborhood" labelText="Bairro:" />
        <Input type="text" name="city" labelText="Cidade:" />
        <Input type="text" name="state" labelText="Estado:" />
        <Button type="submit" textButton="Editar Informação" />
      </Form>
    </Container>
  );
};

export default CartStepAddress;
