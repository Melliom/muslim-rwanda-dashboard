import {
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_ERROR,
  GET_CURRENT_USER_SUCCESS,
} from 'redux/action-types/auth/currentUser';
import { IAuth } from 'redux/initialStates/auth';
import { IStoreParams } from 'interfaces/storeParams';

export default (state: IAuth, { type, payload }: IStoreParams) => {
  switch (type) {
    case GET_CURRENT_USER_START:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: true,
          error: '',
        },
      };
    case GET_CURRENT_USER_ERROR:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          error: payload,
          loading: false,
        },
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          data: payload,
          loading: false,
          error: '',
        },
      };
    default:
      return null;
  }
};
