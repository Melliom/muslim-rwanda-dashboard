import { initialState } from 'redux/initialStates';
import { IStoreParams } from 'interfaces/storeParams';
import changeName from './changeName';

export default (state = initialState.example, action: IStoreParams) => ({
  ...state,
  ...changeName(state, action),
});
