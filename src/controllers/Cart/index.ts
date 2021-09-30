import store from '../../store';
import * as actions from '../../store/modules/Cart/actions';
import { IItemCart } from '../../store/modules/Cart/types';

export async function addItemCart(item: IItemCart) {
  const { cart } = store.getState();

  try {
    const productExists = await cart.items.find(i => i.id === item.id && i);

    const amountCurrent = productExists ? productExists.amount : 0;

    if (
      (productExists && productExists.amountCart >= amountCurrent) ||
      amountCurrent < 0
    ) {
      console.log('quantidade excedida');
      return;
    }

    if (productExists) {
      productExists.amountCart += 1;
      const productAmount = cart.items.map(i =>
        i.id === productExists.id ? productExists : i,
      );
      actions.addItemCart(productAmount);

      return;
    }
    await actions.addItemCart([...cart.items, item]);
  } catch (err) {
    console.log(err);
  }
}

export async function removeItemCart(id: string) {
  actions.removeItemCart(id);
}
