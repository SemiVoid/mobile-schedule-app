import { v4 as uuidv4 } from 'uuid';
import { db } from '../../../config/firebase';
import { notifSend } from '../../notification/notifActions';
import { AppThunk } from '../../rootReducer';
import { emplChange, emplSet } from '../employeeAction';
import { ListType } from '../employeeType';

export const emplFetch = (type: ListType): AppThunk => {
  return (dispatch, state) => {
    if (type === 'origEmplList') {
      if (state().auth.account !== undefined) {
        db.doc(`/users/${state().auth.account?.uid}`)
          .collection('employees')
          .doc('test')
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                emplSet({ list: [...data?.workers], listType: 'origEmplList' })
              );
              dispatch(
                emplChange({
                  variable: 'numberOfEmpl',
                  value: data?.workers.length,
                })
              );
            }
          });
      }
    }
    if (type === 'employeeList') {
      dispatch(emplChange({ variable: 'changesMade', value: false }));
      dispatch(
        emplSet({
          list: [...state().empl.origEmplList],
          listType: 'employeeList',
        })
      );
    }
  };
};

export const emplAdd = (name: string, department: string): AppThunk => {
  return (dispatch, state) => {
    if (name && department) {
      dispatch(emplChange({ variable: 'changesMade', value: true }));
      dispatch(
        emplSet({
          list: [
            ...state().empl.employeeList,
            { id: uuidv4(), name: name, department: department },
          ],
          listType: 'employeeList',
        })
      );
      dispatch(
        notifSend({
          notifType: 'notifToast',
          header: 'Employee Added',
          message: `${name} temporarily Added. To save the changes hit submit`,
        })
      );
    }
  };
};

export const emplSend = (): AppThunk => {
  return (dispatch, state) => {
    if (state().auth.account !== undefined) {
      db.doc(`/users/${state().auth.account?.uid}`)
        .collection('employees')
        .doc('test')
        .update({
          workers: [...state().empl.employeeList],
        })
        .then(() => {
          dispatch(emplChange({ variable: 'changesMade', value: false }));
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Employee Changes Saved',
              message: 'Changes were saved to your profile',
            })
          );
        })
        .catch((err) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Employee Submit Error',
              message: err.message,
            })
          );
        });
    }
  };
};

export const emplDelete = (id: string): AppThunk => {
  return (dispatch, state) => {
    if (id) {
      dispatch(emplChange({ variable: 'changesMade', value: true }));

      const tempList = state().empl.employeeList;
      const result = tempList.filter((data) => data.id !== id);

      dispatch(emplSet({ list: [...result], listType: 'employeeList' }));
    }
  };
};
