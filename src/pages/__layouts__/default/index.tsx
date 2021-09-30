import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../../../components/Menu';
import { useAuth } from '../../../hooks/auth';
import { IItemCart } from '../../../store/modules/Cart/types';
import { AppState } from '../../../store/storeTypes';
import { dataMenu } from '../../../utils/dataStatics';

import { Container } from './styles';

interface IDefaultLayoutProps {
  toggleTheme?: Function;
  isAdmin?: boolean;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({
  toggleTheme,
  isAdmin,
  children,
}) => {
  const { user } = useAuth();
  const items = useSelector<AppState, IItemCart[]>(state => state.cart.items);

  return (
    <Container>
      <Menu
        header={dataMenu.header}
        menuItems={dataMenu.items}
        itemsAuth={dataMenu.itemsAuth}
        itemsPrivate={dataMenu.itemsPrivate}
        itemsDashboard={dataMenu.itemsDashboard}
        toggleTheme={toggleTheme}
        isLogged={!!user}
        isAdmin={isAdmin}
        amountCart={items.length}
      />
      {children}
    </Container>
  );
};

export default DefaultLayout;
