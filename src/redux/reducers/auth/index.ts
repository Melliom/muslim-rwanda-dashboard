import { IStoreParams } from 'interfaces/storeParams';
import { initialState } from 'redux/initialStates';
import login from './login';
import currentUser from './currentUser';

export default (state = initialState.auth, action: IStoreParams) => ({
  ...state,
  ...login(state, action),
  ...currentUser(state, action),
});
