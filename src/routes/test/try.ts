import { IRoute } from 'interfaces/route';
import basePATH from 'constants/basePATH';
import TryTest from 'pages/Test/Try';

const base: IRoute = {
  name: 'Try Test',
  protected: false,
  path: `${basePATH.test}/try`,
  component: TryTest,
};

export default base;
