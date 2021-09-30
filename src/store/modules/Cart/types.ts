import { ICategory } from '../Category/types';

export enum CartStore {
  ID_STORE = 'CART',
}

export enum CartTypes {
  LIST_ITEMS_CART = 'LIST_ITEMS_CART',
  ADD_ITEM_CART = 'ADD_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  ADD_INFORMATION_ORDER = 'ADD_INFORMATION_ORDER',
}

export type CartAction = {
  idStore: CartStore.ID_STORE;
  type: CartTypes;
  items?: IItemCart[];
  id?: string;
  informationOrder?: IInformationOrder;
};

export interface CartState {
  items: IItemCart[];
  cart: ICart;
  informationOrder: IInformationOrder;
}

export interface ICart {
  items: IItemCart[];
}

export interface IItemCart {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  amountCart: number;
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

export interface IInformationOrder {
  installments: number;
  totalRaw: number;
}
