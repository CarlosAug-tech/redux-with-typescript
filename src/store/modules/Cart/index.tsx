import { Reducer } from 'redux';
import { CartAction, CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  items: [],
  informationOrder: {
    installments: 1,
    totalRaw: 0,
  },
  cart: { items: [] },
};

const cart: Reducer<CartState, CartAction> = (
  state = INITIAL_STATE,
  action: CartAction,
): any => {
  switch (action.idStore) {
    case 'CART': {
      switch (action.type) {
        case CartTypes.ADD_ITEM_CART: {
          if (action.items) {
            return { ...state, items: action.items };
          }
          break;
        }
        case CartTypes.REMOVE_ITEM_CART: {
          if (action.id) {
            return {
              ...state,
              items: state.items.filter(i => i.id !== action.id),
            };
          }
          break;
        }
        case CartTypes.ADD_INFORMATION_ORDER: {
          if (action.informationOrder) {
            return {
              ...state,
              informationOrder: action.informationOrder,
            };
          }
          break;
        }
        default:
          return state;
      }
      break;
    }
    default:
      return state;
  }

  return null;
};

export default cart;
