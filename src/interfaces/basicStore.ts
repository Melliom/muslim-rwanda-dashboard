import { IUnknownObject } from './unknownObject';

export interface IBasicReduxStore {
  data: IUnknownObject;
  error: any;
  loading: boolean;
}
