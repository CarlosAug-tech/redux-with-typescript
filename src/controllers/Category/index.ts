import * as actions from '../../store/modules/Category/actions';
import api from '../../services/api';
import { ICategory } from '../../store/modules/Category/types';

export async function getCategories() {
  await api
    .get('/categories')
    .then(response => {
      actions.listCategory(response.data);
    })
    .catch(err => {
      console.log('error');
    });
}

export async function addCategory(data: Omit<ICategory, 'id'>) {
  await api
    .post('/categories', {
      name: data.name,
    })
    .then(response => {})
    .catch(err => {
      console.log('error');
    });
}
