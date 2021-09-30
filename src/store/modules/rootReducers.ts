import { combineReducers } from 'redux';
import categories from './Category';
import products from './Product';
import cart from './Cart';

export default combineReducers({
  product: products,
  category: categories,
  cart,
});
