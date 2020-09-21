import basicReduxStore from 'constants/basicReduxStore';
import { IBasicReduxStore } from 'interfaces/basicStore';

export interface IAuth {
  login: IBasicReduxStore;
  currentUser: IBasicReduxStore;
}

export const auth: IAuth = {
  login: basicReduxStore,
  currentUser: basicReduxStore,
};
