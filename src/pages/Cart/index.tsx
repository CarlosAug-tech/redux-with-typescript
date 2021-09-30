import React from 'react';
import { useSelector } from 'react-redux';
import StepWizard from '../../components/StepWizard';
import { IItemCart } from '../../store/modules/Cart/types';
import { AppState } from '../../store/storeTypes';
import { dataSteps } from '../../utils/dataStatics';

import { Container } from './styles';

const Cart: React.FC = () => {
  const items = useSelector<AppState, IItemCart[]>(state => state.cart.items);

  return (
    <Container>
      {items.length > 0 ? (
        <StepWizard steps={dataSteps} />
      ) : (
        <span>Carrinho vazio!!</span>
      )}
    </Container>
  );
};

export default Cart;
