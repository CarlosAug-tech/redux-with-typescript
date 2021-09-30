import { Reducer } from 'redux';
import { CategoryAction, CategoryState, CategoryTypes } from './types';

const INITIAL_STATE: CategoryState = {
  categories: [],
};

const categories: Reducer<CategoryState, CategoryAction> = (
  state = INITIAL_STATE,
  action: CategoryAction,
): any => {
  switch (action.idStore) {
    case 'CATEGORY': {
      switch (action.type) {
        case CategoryTypes.LIST_CATEGORIES: {
          if (action.categories) {
            return { ...state, categories: action.categories };
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

export default categories;
