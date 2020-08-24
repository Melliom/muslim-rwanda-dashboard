import { FunctionComponent } from 'react';

export interface IRoute {
  name: string;
  protected: boolean;
  path: string;
  component: FunctionComponent;
}
