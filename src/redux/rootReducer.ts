import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Import Custom Reducers
import authReducer from './authentication/authReducer';
import emplReducer from './employee/employeeReducer';
import modalReducer from './modal/modalReducer';
import notifReducer from './notification/notifReducer';
import schedReducer from './schedule/schedReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  notif: notifReducer,
  empl: emplReducer,
  sched: schedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootReducer;
