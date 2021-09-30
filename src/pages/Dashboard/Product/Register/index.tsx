import { Form } from '@unform/web';
import React, { useEffect, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../../../components/Input';

import productNoImg from '../../../../assets/Images/productNoImg.png';

import { addProduct } from '../../../../controllers/Product';
import { IProduct } from '../../../../store/modules/Product/types';
import { getCategories } from '../../../../controllers/Category';
import { AppState } from '../../../../store/storeTypes';
import { ICategory } from '../../../../store/modules/Category/types';
import Select from '../../../../components/Select';
import Button from '../../../../components/Button';

import { Container, ImageUpload } from './styles';

const RegisterProduct: React.FC = () => {
  const history = useHistory();
  const categories = useSelector<AppState, ICategory[]>(
    state => state.category.categories,
  );

  const [formDataImage, setFormDataImage] = useState<FormData>();
  const [previewImg, setPreviewImg] = useState('');
  const [optionSelected, setOptionSelected] = useState('');

  useEffect(() => {
    getCategories();
  }, []);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new FormData();
    if (e.target.files !== null) {
      data.append('file', e && e.target.files[0]);
      setFormDataImage(data);
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (formData: IProduct) => {
    const data = {
      ...formData,
      price: Number(formData.price),
      amount: Number(formData.amount),
      category_id: optionSelected,
    };

    try {
      if (!formDataImage) {
        console.log('Selecione uma imagem');
        return;
      }

      await addProduct(data, formDataImage, history);
    } catch (err) {
      console.log('Error');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Cadastrar Produto</h3>
        <ImageUpload>
          <img src={previewImg || productNoImg} alt="" />
          <input
            type="file"
            id="imageUpload"
            onChange={handleImage}
            accept="image/*"
          />
          <label htmlFor="imageUpload">
            <FiCamera size={14} />
          </label>
        </ImageUpload>
        <Input name="name" type="text" labelText="Nome:" />
        <Input multiline name="description" type="text" labelText="Descrição" />
        <Select
          setOptionSelected={setOptionSelected}
          optionSelected={optionSelected}
          name="category"
          selectData={categories}
          firstOption="Selecione uma categoria"
        />
        <Input name="price" isMaskCurrency type="number" labelText="Preço:" />
        <Input name="amount" type="number" labelText="Quantidade:" />
        <Button type="submit" textButton="Cadastrar Produto" />
      </Form>
    </Container>
  );
};

export default RegisterProduct;
