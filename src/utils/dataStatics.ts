import {
  FiClipboard,
  FiCreditCard,
  FiHome,
  FiLogIn,
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiUser,
} from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import { IStepObjectProps } from '../components/StepWizard';
import CartStepAddress from '../pages/Cart/StepsComponent/CartStepAddress';
import CartStepFormPayments from '../pages/Cart/StepsComponent/CartStepFormPayments';
import CartStepOrder from '../pages/Cart/StepsComponent/CartStepOrder';

export const dataMenu = {
  header: {
    logo: '',
    sigla: 'DZN',
    name: 'DeezerNext',
  },
  items: [
    {
      title: 'Home',
      Icon: FiHome,
      path: '/',
    },
  ],
  itemsAuth: [
    {
      title: 'Cadastrar',
      Icon: FiUser,
      path: '/register',
    },
    {
      title: 'Login',
      Icon: FiLogIn,
      path: '/login',
    },
  ],
  itemsPrivate: [
    {
      title: 'Cart',
      Icon: FiShoppingCart,
      path: '/cart',
      isNotify: true,
    },
  ],
  itemsDashboard: [
    {
      title: 'Product',
      Icon: MdDashboard,
      path: '/dashboard/product',
      isAdmin: true,
      dropdownItems: [
        {
          title: 'Cadastrar Produto',
          Icon: FiPackage,
          path: '/dashboard/register/product',
          isAdmin: true,
        },
        {
          title: 'Cadastrar Categoria',
          Icon: FiPackage,
          path: '/dashboard/register/category',
          isAdmin: true,
        },
      ],
    },
  ],
};

export const dataSteps: IStepObjectProps[] = [
  {
    Icon: FiShoppingCart,
    Component: CartStepOrder,
  },
  {
    Icon: FiClipboard,
    Component: CartStepAddress,
  },
  {
    Icon: FiCreditCard,
    Component: CartStepFormPayments,
  },
];
