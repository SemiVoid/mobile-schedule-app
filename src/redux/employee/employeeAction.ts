import { EmplActionTypes, EmplSetPayload, EMPL_SET } from './employeeType';
import { db } from '../../config/firebase';
import { AppThunk } from '../rootReducer';

export const emplSet = (list: EmplSetPayload): EmplActionTypes => {
  return {
    type: EMPL_SET,
    payload: list,
  };
};

export const emplFetch = (): AppThunk => {
  return (dispatch, state) => {
    if (state().auth.account !== undefined) {
      db.doc(`/users/${state().auth.account?.uid}`)
        .collection('employees')
        .doc('test')
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            dispatch(emplSet({ list: [...data?.workers] }));
          } else {
            dispatch(emplSet({ list: [] }));
          }
        });
      console.log('Employee Fetch was Called');
    }
  };
};

export const emplAdd = (name: string, department: string): AppThunk => {
  return (dispatch, state) => {
    db.doc(`/users/${state().auth.account?.uid}`)
      .collection('employees')
      .doc('test')
      .update({
        workers: [
          ...state().empl.employeeList,
          { name: name, department: department },
        ],
      })
      .then(() => {
        console.log('Employee Added');
      });
  };
};
