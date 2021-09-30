import { Reducer } from 'redux';
import { ProductState, ProductAction, ProductTypes } from './types';

const INITIAL_STATE: ProductState = {
  products: [],
  product: {
    id: '',
    name: '',
    description: '',
    price: 0,
    amount: 0,
    category: {
      id: '',
      name: '',
    },
    image_id: '',
    category_id: '',
    image: {
      id: '',
      name: '',
      path: '',
      url: '',
    },
  },
};

const products: Reducer<ProductState, ProductAction> = (
  state = INITIAL_STATE,
  action: ProductAction,
): any => {
  switch (action.idStore) {
    case 'PRODUCT': {
      switch (action.type) {
        case ProductTypes.LIST_PRODUCTS: {
          if (action.products) {
            return { ...state, products: action.products };
          }
          break;
        }
        case ProductTypes.PRODUCT: {
          if (action.product) {
            return { ...state, product: action.product };
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

export default products;
