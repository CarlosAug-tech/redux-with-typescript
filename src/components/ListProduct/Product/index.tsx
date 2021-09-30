import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../store/modules/Product/types';

import productNoImg from '../../../assets/Images/productNoImg.png';

import { Container } from './styles';
import Button from '../../Button';
import { formatPrice } from '../../../utils/formatPrice';

interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product }) => (
  <Container>
    <img src={product.image ? product.image.url : productNoImg} alt="" />
    <div>
      <strong>{product.name}</strong>
      <p>{product.description}</p>
    </div>
    <strong>{formatPrice(product.price)}</strong>
    <Link to={`/detailsProduct/${product.id}`}>
      <Button textButton="Detalhes do Produto" />
    </Link>
  </Container>
);

export default Product;
