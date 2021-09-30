import store from '../..';
import { IProduct, ProductAction, ProductStore, ProductTypes } from './types';

export const listProduct = (products: IProduct[]) =>
  store.dispatch<ProductAction>({
    idStore: ProductStore.ID_STORE,
    type: ProductTypes.LIST_PRODUCTS,
    products,
  });

export const product = (product: IProduct) =>
  store.dispatch<ProductAction>({
    idStore: ProductStore.ID_STORE,
    type: ProductTypes.PRODUCT,
    product,
  });
