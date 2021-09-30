import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../controllers/Product';
import { IProduct } from '../../store/modules/Product/types';
import { AppState } from '../../store/storeTypes';
import Product from './Product';

import { Container } from './styles';

const ListProduct: React.FC = () => {
  const products = useSelector<AppState, IProduct[]>(
    state => state.product.products,
  );

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products);

  return (
    <Container>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ListProduct;
