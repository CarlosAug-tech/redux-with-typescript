import { CartState } from './modules/Cart/types';
import { CategoryState } from './modules/Category/types';
import { ProductState } from './modules/Product/types';

export interface AppState {
  product: ProductState;
  category: CategoryState;
  cart: CartState;
}
