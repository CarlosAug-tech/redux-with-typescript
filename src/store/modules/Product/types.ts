import { ICategory } from '../Category/types';

export enum ProductStore {
  ID_STORE = 'PRODUCT',
}

export enum ProductTypes {
  LIST_PRODUCTS = 'LIST_PRODUCTS',
  PRODUCT = 'PRODUCT',
}

export type ProductAction = {
  idStore: ProductStore.ID_STORE;
  type: ProductTypes;
  products?: IProduct[];
  product?: IProduct;
};

export interface ProductState {
  products: IProduct[];
  product: IProduct;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  category: ICategory;
  image_id: string;
  category_id: string;
  image: {
    id: string;
    name: string;
    path: string;
    url: string;
  };
}
