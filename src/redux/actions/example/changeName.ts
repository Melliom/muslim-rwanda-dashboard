import { CHANGE_NAME_SUCCESS } from 'redux/action-types/example/changeName';
import { Dispatch } from 'redux';
import notification from 'utils/notification';

export default (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: CHANGE_NAME_SUCCESS,
    payload: name,
  });
  notification('Name changed', 'success');
};
