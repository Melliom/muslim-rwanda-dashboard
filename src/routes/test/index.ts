import { IRoute } from 'interfaces/route';
import Test from 'pages/Test';
import basePATH from 'constants/basePATH';
import tries from './try';

export const base: IRoute = {
  name: 'Test',
  protected: false,
  path: basePATH.test,
  component: Test,
};

export default [base, tries];
