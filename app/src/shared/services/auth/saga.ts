import { put, takeLatest } from 'redux-saga/effects';
import { openUserMessage, UserMessageStatus } from 'features/user-message';
import { types } from './types';
import { LoginToGamePayload, LoginToGameResponse } from './interfaces';
import { saveUsername } from './slice';
import { IAdditionalSagaParams } from '../../types';

export function* loginToGame(
  { payload }: { payload: LoginToGamePayload },
  { socket }: IAdditionalSagaParams
) {
  const res: LoginToGameResponse = yield socket.login<{ username: string }, LoginToGameResponse>({
    username: payload.username
  });

  if (res.socketId) {
    yield put(openUserMessage({ status: UserMessageStatus.success, message: res.message }));
    yield put(saveUsername({ user: res.user, socketId: res.socketId }));
    payload.navigate('/dashboard');
  } else {
    yield put(openUserMessage({ status: UserMessageStatus.error, message: res.message }));
  }
}

export function* watchAllAuth(params: IAdditionalSagaParams) {
  yield takeLatest<{ payload: LoginToGamePayload; type: types.LOGIN_TO_GAME }>(
    types.LOGIN_TO_GAME,
    (action) => loginToGame(action, params)
  );
}
