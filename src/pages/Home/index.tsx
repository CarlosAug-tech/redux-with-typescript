import React from 'react';
import ListProduct from '../../components/ListProduct';

import { Container, Content } from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <ListProduct />
    </Content>
  </Container>
);

export default Home;
