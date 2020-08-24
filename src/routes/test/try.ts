import { IRoute } from 'interfaces/route';
import baseURL from 'constants/baseURL';
import TryTest from 'pages/Test/Try';

const base: IRoute = {
  name: 'Try Test',
  protected: false,
  path: `${baseURL.test}/try`,
  component: TryTest,
};

export default base;
