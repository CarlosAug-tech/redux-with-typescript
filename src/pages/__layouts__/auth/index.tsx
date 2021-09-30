import React from 'react';

import Menu from '../../../components/Menu';
import { useAuth } from '../../../hooks/auth';
import { dataMenu } from '../../../utils/dataStatics';

import { Container, Content } from './styles';

interface IAuthLayoutProps {
  toggleTheme?: Function;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ toggleTheme, children }) => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <Menu
          header={dataMenu.header}
          menuItems={dataMenu.items}
          itemsAuth={dataMenu.itemsAuth}
          toggleTheme={toggleTheme}
          isLogged={!!user}
        />
        {children}
      </Content>
    </Container>
  );
};

export default AuthLayout;
