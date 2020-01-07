import { combineReducers } from 'redux';
import showFlagReducer from 'Reducers/showFlag';
import formDateReducer from 'Reducers/FormDate';

export default combineReducers({
  showFlagReducer,
  formDateReducer
});
