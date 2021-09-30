import React, { useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { addItemCart } from '../../controllers/Cart';
import { getProductById } from '../../controllers/Product';
import { ICart, IItemCart } from '../../store/modules/Cart/types';
import { IProduct } from '../../store/modules/Product/types';
import { AppState } from '../../store/storeTypes';
import { formatPrice } from '../../utils/formatPrice';

import { Container, Content } from './styles';

interface IParamsProps {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<IParamsProps>();
  const product = useSelector<AppState, IProduct>(
    state => state.product.product,
  );
  const items = useSelector<AppState, IItemCart[]>(state => state.cart.items);

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id]);

  const handleAddItemCart = (item: IProduct) => {
    const itemCart = {
      ...item,
      amountCart: 1,
    };
    addItemCart(itemCart);
  };

  console.log(items);

  return (
    <Container>
      {product && (
        <Content>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div>
            <img src={product.image.url} alt="" />
            <div>
              <div>
                <span>Preço: {formatPrice(product.price)}</span>
              </div>
              <Button
                textButton="Adicionar ao carrinho"
                onClick={() => handleAddItemCart(product)}
              >
                <FiShoppingBag />
              </Button>
            </div>
          </div>
        </Content>
      )}
    </Container>
  );
};

export default Product;
