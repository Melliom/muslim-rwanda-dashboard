import { LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS } from 'redux/action-types/auth/login';
import { initialState } from 'redux/initialStates';
import { IAuth } from 'redux/initialStates/auth';
import { IStoreParams } from 'interfaces/storeParams';

export default (state: IAuth, { type, payload }: IStoreParams): IAuth => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          error: '',
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          error: payload,
          loading: false,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          data: payload,
          loading: false,
          error: '',
        },
      };
    default:
      return initialState.auth;
  }
};
