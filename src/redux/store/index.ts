import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'redux/reducers';
import thunk from 'redux-thunk';
import { initialState } from 'redux/initialStates';

const rootReducer = combineReducers(reducers);

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
