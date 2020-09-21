import { Dispatch } from 'redux';
import rmaApi from 'helpers/axios';
import { LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS } from 'redux/action-types/auth/login';
import { IUnknownObject } from 'interfaces/unknownObject';
import { GET_CURRENT_USER_SUCCESS } from 'redux/action-types/auth/currentUser';

export default (data: IUnknownObject) => async (push: any, dispatch: Dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const { data: payload, headers } = await rmaApi.post('/login', { user: data });
    const { authorization: token } = headers;
    localStorage.setItem('rma-token', token);
    rmaApi.defaults.headers.Authorization = token;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: 'User was successfully registered!',
    });
    dispatch({
      payload,
      type: GET_CURRENT_USER_SUCCESS,
    });
    push('/');
  } catch (error) {
    console.error('here', error);
    dispatch({ type: LOGIN_ERROR, payload: error });
  }
};
