import { call, put } from 'redux-saga/effects';
import type { StrictEffect } from 'redux-saga/effects';
import { addUser } from './modules/call';
import { addPosition } from './modules/position';
import { requestGetUser } from './requests';
import type { Position, User } from './stateTypes';

export function* handleAddUser(): Generator<StrictEffect, void, User> {
  try {
    const user = yield call(requestGetUser); // fake user
    yield put(addUser(user));
  } catch (error) {
    throw Error(error);
  }
}
type Params = { position: Position, type: string };
export function* handleAddPos({ position }: Params): Generator<StrictEffect, void, User> {
  yield put(addPosition(position));
}
