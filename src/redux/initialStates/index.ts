import { example, Iexample } from './example';
import { IAuth, auth } from './auth';

export interface IRootState {
  example: Iexample;
  auth: IAuth;
}

export const initialState: IRootState = {
  auth,
  example,
};
