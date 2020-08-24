import { IRoute } from 'interfaces/route';
import Test from 'pages/Test';
import baseURL from 'constants/baseURL';
import tries from './try';

export const base: IRoute = {
  name: 'Test',
  protected: false,
  path: baseURL.test,
  component: Test,
};

export default [base, tries];
