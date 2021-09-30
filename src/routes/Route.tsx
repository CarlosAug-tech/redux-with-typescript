import React from 'react';
import {
  RouteProps as DOMRouteProps,
  Route as DOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import AuthLayout from '../pages/__layouts__/auth';
import DefaultLayout from '../pages/__layouts__/default';

interface IRouteProps extends DOMRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
  isAuth?: boolean;
  isDashboard?: boolean;
  toggleTheme?: Function;
}

const Route: React.FC<IRouteProps> = ({
  component: Component,
  isPrivate = false,
  isAuth = false,
  isDashboard = false,
  toggleTheme,
  location,
  ...rest
}) => {
  const { user } = useAuth();

  const userAdmin = user && user.email === process.env.REACT_APP_SUPER_USER;

  if (user && isAuth) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  if (!user && isPrivate) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  if (user && !userAdmin && isDashboard) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  const Layout = isAuth ? AuthLayout : DefaultLayout;

  return (
    <DOMRoute
      {...rest}
      render={() => (
        <Layout isAdmin={!!userAdmin} toggleTheme={toggleTheme}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
