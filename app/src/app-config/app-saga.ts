import { all } from 'redux-saga/effects';

import { watchAllAuth } from 'shared/services/auth/saga';
import { watchAllRooms } from '../features/rooms/model/saga';
import { IAdditionalSagaParams } from 'shared/types';

export default function* watchAllRequests(params: IAdditionalSagaParams) {
  yield all([watchAllAuth(params), watchAllRooms(params)]);
}
