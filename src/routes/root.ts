import { IRoute } from 'interfaces/route';
import basePATH from 'constants/basePATH';
import Dashboard from 'pages';

export const base: IRoute = {
  name: 'Dashboard',
  protected: true,
  path: basePATH.root,
  component: Dashboard,
};

export default base;
