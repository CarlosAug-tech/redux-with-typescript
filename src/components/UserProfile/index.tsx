import React from 'react';
import { FiEdit, FiList, FiLogOut } from 'react-icons/fi';
import { Container, Content, DropdownContainer, DropdownItem } from './styles';

import userNoImg from '../../assets/Images/noimg.png';
import { useAuth } from '../../hooks/auth';

const UserProfile: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <img src={userNoImg} alt="" />
        <DropdownContainer>
          <DropdownItem href="">
            <span>Editar Perfil</span>
            <FiEdit />
          </DropdownItem>
          <DropdownItem href="">
            <span>Meus Pedidos</span>
            <FiList />
          </DropdownItem>
          <DropdownItem href="">
            <button type="button" onClick={signOut}>
              <span>Logout</span>
              <FiLogOut />
            </button>
          </DropdownItem>
        </DropdownContainer>
      </Content>
    </Container>
  );
};

export default UserProfile;
