// Root Reexport
export type { RootState } from './rootReducer';

// Authentication Reexports
export { userAccount, userInput } from './authentication/authActions';

export {
  userLogin,
  userLogout,
  userRegister,
} from './authentication/thunks/userThunks';

export {
  updateName,
  updateEmail,
  updatePassword,
  accountDelete,
} from './authentication/thunks/accountThunks';

export type { fieldType } from './authentication/authTypes';

// Employee Reexports
export * from './employee/employeeAction';
export * from './employee/thunks/emplThunks'

// Modal Reexports
export { modalOpen, modalClose } from './modal/modalActions';

export type { Modals } from './modal/modalTypes';

// Notification Reexports
export { notifSend, notifDismiss } from './notification/notifActions';

export type { NotifType } from './notification/notifTypes';
