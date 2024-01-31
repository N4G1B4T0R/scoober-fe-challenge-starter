import { all } from 'redux-saga/effects';

import { watchAllUserMessage } from 'features/user-message/model/saga';
import { watchAllAuth } from 'shared/services/auth/saga';
import { watchAllRooms } from '../features/rooms/model/saga';
import { IAdditionalSagaParams } from 'shared/types';

export default function* watchAllRequests(params: IAdditionalSagaParams) {
  yield all([
    watchAllUserMessage(),
    watchAllAuth(params),
    watchAllRooms(params),
  ]);
}
