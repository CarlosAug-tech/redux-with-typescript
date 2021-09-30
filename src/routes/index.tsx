import React from 'react';
import { Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import RegisterCategory from '../pages/Dashboard/Category/Register';
import RegisterProduct from '../pages/Dashboard/Product/Register';
import Home from '../pages/Home';
import Product from '../pages/Product';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Route from './Route';

interface IRoutesProps {
  toggleTheme: Function;
}

const Routes: React.FC<IRoutesProps> = ({ toggleTheme }) => (
  <Switch>
    <Route path="/" exact toggleTheme={toggleTheme} component={Home} />

    <Route path="/login" isAuth toggleTheme={toggleTheme} component={SignIn} />
    <Route
      path="/register"
      isAuth
      toggleTheme={toggleTheme}
      component={SignUp}
    />

    <Route
      path="/detailsProduct/:id"
      isPrivate
      toggleTheme={toggleTheme}
      component={Product}
    />
    <Route path="/cart" isPrivate toggleTheme={toggleTheme} component={Cart} />

    <Route
      path="/dashboard/register/product"
      isDashboard
      isPrivate
      toggleTheme={toggleTheme}
      component={RegisterProduct}
    />
    <Route
      path="/dashboard/register/category"
      isDashboard
      isPrivate
      toggleTheme={toggleTheme}
      component={RegisterCategory}
    />
  </Switch>
);

export default Routes;
