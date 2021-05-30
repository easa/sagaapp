import { takeLatest } from 'redux-saga/effects';
import { handleAddUser, handleAddPos } from './handler';

export function* watcherSaga() {
  yield takeLatest('ADD_USER', handleAddUser);
  yield takeLatest('ADD_POS', handleAddPos);
}
