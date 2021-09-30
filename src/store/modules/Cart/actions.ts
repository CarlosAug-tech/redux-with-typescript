import store from '../..';
import {
  CartAction,
  CartStore,
  CartTypes,
  IInformationOrder,
  IItemCart,
} from './types';

export const addItemCart = (items: IItemCart[]) =>
  store.dispatch<CartAction>({
    idStore: CartStore.ID_STORE,
    type: CartTypes.ADD_ITEM_CART,
    items,
  });

export const removeItemCart = (id: string) =>
  store.dispatch<CartAction>({
    idStore: CartStore.ID_STORE,
    type: CartTypes.REMOVE_ITEM_CART,
    id,
  });

export const addInformationOrder = (informationOrder: IInformationOrder) =>
  store.dispatch<CartAction>({
    idStore: CartStore.ID_STORE,
    type: CartTypes.ADD_INFORMATION_ORDER,
    informationOrder,
  });
