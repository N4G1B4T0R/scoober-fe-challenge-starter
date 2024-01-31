import { put, take, takeLatest, call, select } from 'redux-saga/effects';
import { types } from './types';
import { IRoom, SelectRoomResponse } from './interfaces';
import { saveRoom, saveIsRoomReady } from './slice';
import { IAdditionalSagaParams, RootState } from 'shared/types';
import { EventChannel } from 'redux-saga';

const getUsername = (state: RootState) => state.auth.userInfo.user;
export function* selectTheRoom({ payload }: { payload: IRoom }, { socket }: IAdditionalSagaParams) {
  const { name: room, type: roomType } = payload;
  const username: string = yield select(getUsername);
  yield put(saveIsRoomReady(payload.type === 'cpu'));

  socket.joinRoom({ username, room, roomType });

  const messageChannel: EventChannel<string> = yield call(socket.createEventChannel, 'message');
  const onReadyChannel: EventChannel<string> = yield call(socket.createEventChannel, 'onReady');

  while (true) {
    const messageResponse: SelectRoomResponse = yield take(messageChannel);

    if (messageResponse) {
      yield put(saveRoom(payload));
    }
    const { state } = yield take(onReadyChannel);
    yield put(saveIsRoomReady(state));
  }
}

export function* watchAllRooms(params: IAdditionalSagaParams) {
  yield takeLatest<{ payload: IRoom; type: types.SELECT_ROOM }>(types.SELECT_ROOM, (action) =>
    selectTheRoom(action, params)
  );
}
