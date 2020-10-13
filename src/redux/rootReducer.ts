import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import authReducer from './authentication/authReducer';
import modalReducer from './modal/modalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootReducer;
