import React, { useEffect } from 'react';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { removeItemCart } from '../../../../controllers/Cart';
import { addInformationOrder } from '../../../../store/modules/Cart/actions';
import {
  IInformationOrder,
  IItemCart,
} from '../../../../store/modules/Cart/types';
import { AppState } from '../../../../store/storeTypes';
import { formatPrice } from '../../../../utils/formatPrice';

import {
  Container,
  TableOrder,
  AmountContainer,
  TotalContainer,
} from './styles';

const CartStepOrder: React.FC = () => {
  const informationOrder = useSelector<AppState, IInformationOrder>(
    state => state.cart.informationOrder,
  );
  const items = useSelector<AppState, IItemCart[]>(state => state.cart.items);
  const totalRaw =
    items &&
    items.reduce(
      (total, item) => Number(total) + item.price * item.amountCart,
      0,
    );

  useEffect(() => {
    addInformationOrder({ ...informationOrder, totalRaw });
  }, [totalRaw]);

  return (
    <Container>
      <TableOrder>
        <thead>
          <th />
          <th>Nome:</th>
          <th>Descrição</th>
          <th>Qtd</th>
          <th>Preço Unit.</th>
          <th>Total</th>
          <th />
        </thead>
        <tbody>
          {items &&
            items.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.image.url} alt="" />
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <AmountContainer>
                    <button type="button">
                      <FiPlus />
                    </button>
                    <input type="text" value={item.amountCart} disabled />
                    <button type="button">
                      <FiMinus />
                    </button>
                  </AmountContainer>
                </td>
                <td>
                  <strong>{formatPrice(item.price)}</strong>
                </td>
                <td>
                  <strong>{formatPrice(item.price * item.amountCart)}</strong>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeItemCart(item.id)}
                    >
                      <FiTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </TableOrder>
      <TotalContainer>
        <div />
        <div>
          <span>Total:</span>
          <strong>{formatPrice(totalRaw)}</strong>
        </div>
      </TotalContainer>
    </Container>
  );
};

export default CartStepOrder;
