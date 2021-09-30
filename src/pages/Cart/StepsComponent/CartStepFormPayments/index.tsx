import { Form } from '@unform/web';
import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { useAuth } from '../../../../hooks/auth';
import {
  IInformationOrder,
  IItemCart,
} from '../../../../store/modules/Cart/types';
import { AppState } from '../../../../store/storeTypes';
import { formatPrice } from '../../../../utils/formatPrice';

import {
  Container,
  Content,
  InformationContainer,
  OrderInformations,
  TableOrder,
  UserInformations,
  InformationItem,
  PaymentContainer,
} from './styles';

const CartStepFormPayments: React.FC = () => {
  const { user } = useAuth();
  const items = useSelector<AppState, IItemCart[]>(state => state.cart.items);
  const informationOrder = useSelector<AppState, IInformationOrder>(
    state => state.cart.informationOrder,
  );

  console.log(informationOrder);

  return (
    <Container>
      <Content>
        <InformationContainer>
          <OrderInformations>
            <h3>Informações do pedido</h3>
            <TableOrder>
              <thead>
                <th />
                <th>Nome:</th>
                <th>Descrição:</th>
                <th>Qtds:</th>
                <th>Preço Unit.</th>
                <th>Total:</th>
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
                        <div>
                          <p>{item.description}</p>
                        </div>
                      </td>
                      <td>
                        <strong>{item.amountCart}</strong>
                      </td>
                      <td>
                        <strong>{formatPrice(item.price)}</strong>
                      </td>
                      <td>{formatPrice(item.price * item.amountCart)}</td>
                    </tr>
                  ))}
              </tbody>
            </TableOrder>
          </OrderInformations>
          <UserInformations>
            <div>
              <h3>Informação do Usuário</h3>
              <InformationItem>
                <strong>Nome:</strong>
                <span>{user.name}</span>
              </InformationItem>
              <InformationItem>
                <strong>E-mail:</strong>
                <span>{user.email}</span>
              </InformationItem>
              <InformationItem>
                <strong>Telefone:</strong>
                <span>{user.phone}</span>
              </InformationItem>
              <InformationItem>
                <strong>Data de Nascimento:</strong>
                <span>{user.date_birthday}</span>
              </InformationItem>
              <InformationItem>
                <strong>CPF:</strong>
                <span>{user.cpf}</span>
              </InformationItem>
              <InformationItem>
                <strong>RG:</strong>
                <span>{user.rg}</span>
              </InformationItem>
            </div>
            <div>
              <h3>Informações de Endereço</h3>
              <InformationItem>
                <strong>CEP:</strong>
                <span>{user.address.zipcode}</span>
              </InformationItem>
              <InformationItem>
                <strong>Rua:</strong>
                <span>{user.address.street}</span>
              </InformationItem>
              <InformationItem>
                <strong>Número:</strong>
                <span>{user.address.street_number}</span>
              </InformationItem>
              <InformationItem>
                <strong>Bairro:</strong>
                <span>{user.address.neighborhood}</span>
              </InformationItem>
              <InformationItem>
                <strong>Data de Cidade:</strong>
                <span>{user.address.city}</span>
              </InformationItem>
              <InformationItem>
                <strong>Estado:</strong>
                <span>{user.address.state}</span>
              </InformationItem>
            </div>
          </UserInformations>
        </InformationContainer>
        <PaymentContainer>
          <Form onSubmit={() => {}}>
            <h3>Informações do cartão</h3>
            <Input
              type="text"
              name="card_holder_name"
              labelText="Nome no cartão:"
            />
            <Input
              type="text"
              name="card_number"
              labelText="Número do cartão:"
            />
            <Input
              type="text"
              name="card_cvv"
              labelText="Código de segurança do cartão:"
            />
            <Button type="submit" textButton="Finalizar Compra" />
          </Form>
        </PaymentContainer>
      </Content>
    </Container>
  );
};

export default CartStepFormPayments;
