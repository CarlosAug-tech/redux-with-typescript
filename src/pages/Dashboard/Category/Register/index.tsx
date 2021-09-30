import { Form } from '@unform/web';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { addCategory } from '../../../../controllers/Category';
import { ICategory } from '../../../../store/modules/Category/types';
import { Container } from './styles';

const RegisterCategory: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (formData: Omit<ICategory, 'id'>) => {
    console.log(formData);
    try {
      await addCategory(formData);
      history.push('/dashboard/register/product');
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Cadastrar Categoria</h3>
        <Input type="text" name="name" labelText="Nome da categoria:" />
        <Button type="submit" textButton="Cadastrar Categoria" />
      </Form>
    </Container>
  );
};

export default RegisterCategory;
