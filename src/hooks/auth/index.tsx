import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export interface IUserProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  phone: string;
  date_birthday: string;
  password: string;
  address: {
    street: string;
    street_number: string;
    zipcode: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  avatar: {
    id: string;
    name: string;
    path: string;
    url: string;
  };
}

export interface ICredentialsSignInProps {
  email: string;
  password: string;
}

interface IAuthStateProps {
  user: IUserProps;
  token: string;
}

interface IAuthContextProps {
  user: IUserProps;
  signIn(credentials: ICredentialsSignInProps): Promise<void>;
  signUp(credentials: Omit<IUserProps, 'id' | 'avatar'>): Promise<void>;
  updateUser(credentials: Omit<IUserProps, 'id'>): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<IAuthStateProps>(() => {
    const user = localStorage.getItem('deliveryUser');
    const token = localStorage.getItem('deliveryToken');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthStateProps;
  });

  const signIn = useCallback(async (credentials: ICredentialsSignInProps) => {
    const { email, password } = credentials;

    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { user, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('deliveryUser', JSON.stringify(user));
    localStorage.setItem('deliveryToken', token);

    setData({
      user,
      token,
    });

    history.push('/');
  }, []);

  const signUp = useCallback(
    async (credentials: Omit<IUserProps, 'id' | 'avatar'>) => {
      await api.post('/users', credentials);
      history.push('/login');
    },
    [],
  );

  const updateUser = useCallback(
    async (credentials: Omit<IUserProps, 'id'>) => {
      const response = await api.put('/users', credentials);
      localStorage.setItem('deliveryUser', JSON.stringify(response.data));
      const token = localStorage.getItem('deliveryToken');
      if (!token) {
        return;
      }
      setData({
        token,
        user: response.data,
      });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('deliveryUser');
    localStorage.removeItem('deliveryToken');
    history.push('/');
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data && data.user, signIn, signUp, updateUser, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('');
  }

  return context;
}

export { AuthProvider, useAuth };
