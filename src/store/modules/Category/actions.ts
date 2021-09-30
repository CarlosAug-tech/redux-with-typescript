import store from '../..';
import {
  CategoryAction,
  CategoryStore,
  CategoryTypes,
  ICategory,
} from './types';

export const listCategory = (categories: ICategory[]) =>
  store.dispatch<CategoryAction>({
    idStore: CategoryStore.ID_STORE,
    type: CategoryTypes.LIST_CATEGORIES,
    categories,
  });
