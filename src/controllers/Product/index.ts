import * as actions from '../../store/modules/Product/actions';

import api from '../../services/api';
import { IProduct } from '../../store/modules/Product/types';

export async function getProducts() {
  try {
    const response = await api.get('/products');
    await actions.listProduct(response.data);
  } catch (err) {
    console.log('error');
  }
}

export async function getProductById(id: String) {
  try {
    await api
      .get(`/product/${id}`)
      .then(response => {
        actions.product(response.data);
      })
      .catch(err => {
        console.log('Err connection');
      });
  } catch (err) {
    console.log('error');
  }
}

export async function addProduct(
  data: IProduct,
  imageData: FormData,
  history: any,
) {
  try {
    if (
      !data.amount ||
      !data.category_id ||
      !data.description ||
      !data.name ||
      !data.price
    ) {
      console.log('Ooops preencha todos campos!!');
      return;
    }

    const response = await api.post('/files', imageData);
    const { id } = await response.data;

    const dataProduct = {
      ...data,
      image_id: id,
    };

    await api
      .post('/products', dataProduct)
      .then(response => {
        history.push('/');
      })
      .catch(err => {
        console.log('Erro ao cadastrar o produto');
      });
  } catch (err) {
    console.log('Error');
  }
}
