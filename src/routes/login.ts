import { IRoute } from 'interfaces/route';
import Login from 'pages/Login';

const base: IRoute = {
  name: 'Login',
  protected: false,
  path: '/login',
  component: Login,
};

export default base;
