import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { types } from './types';
import { IAdditionalSagaParams, RootState } from 'shared/types';
import {
  ActivateYourTurnResponse,
  GameStatus,
  IMessage,
  ListeningGameAction,
  RandomNumberResponse,
  SendNumberAction,
  StartGameAction
} from './interfaces';
import { saveMessage, saveResult, saveStatus } from './slice';
import { EventChannel } from 'redux-saga';

const getLastResult = (state: RootState) =>
  state.playground.messageList[state.playground.messageList.length - 1].result;

const getUserInfo = (state: RootState) => state.auth.userInfo;
const getMessageList = (state: RootState) => state.playground.messageList;

export function* initGame({ socket }: IAdditionalSagaParams) {
  // eslint-disable-next-line require-yield
  socket.letsPlay();
}

export function* sendNumber(action: SendNumberAction, { socket }: IAdditionalSagaParams) {
  const number: number = yield select(getLastResult);
  const data = { number, selectedNumber: action.payload };

  socket.sendNumber(data);
  yield put(saveStatus(GameStatus.wait));
}

export function* listeningChanges({ socket }: IAdditionalSagaParams) {
  let isGameOver = false;
  const { user: username, socketId } = yield select(getUserInfo);

  const randomNumberChannel: EventChannel<string> = yield call(
    socket.createEventChannel,
    'randomNumber'
  );
  const activateYourTurnChannel: EventChannel<string> = yield call(
    socket.createEventChannel,
    'activateYourTurn'
  );

  while (!isGameOver) {
    const messageList: IMessage[] = yield select(getMessageList);
    const messageResponse: RandomNumberResponse = yield take(randomNumberChannel);

    if (messageResponse.isFirst) {
      yield put(
        saveMessage({
          ...messageResponse,
          number: +messageResponse.number,
          result: +messageResponse.number
        })
      );
    }

    if (messageList.length && !messageResponse.isFirst) {
      const prevResult = messageList[messageList.length - 1];
      const result = messageResponse.isCorrectResult
        ? +messageResponse.number
        : ((messageResponse.selectedNumber + messageResponse.number) / 3).toFixed(2);

      const format = `[(${messageResponse.selectedNumber} + ${prevResult.result}) / 3] = ${result}`;

      yield put(
        saveMessage({
          isCurrentUser: messageResponse.user === username,
          result: messageResponse.number,
          selectedNumber: messageResponse.selectedNumber,
          format
        })
      );
    }

    if (!messageResponse.isFirst) {
      const activateYourTurnResponse: ActivateYourTurnResponse =
        yield take(activateYourTurnChannel);

      if (messageResponse.user === 'CPU') {
        yield put(saveStatus(activateYourTurnResponse.state));
      } else {
        yield put(
          saveStatus(activateYourTurnResponse.user === socketId ? GameStatus.wait : GameStatus.play)
        );
      }
    }

    if (messageResponse.number === 1) {
      isGameOver = true;
      yield put(saveResult(messageResponse.user === username));
    }
  }

  randomNumberChannel.close();
  activateYourTurnChannel.close();
}

export function* watchAllPlaygrounds(params: IAdditionalSagaParams) {
  yield takeLatest<StartGameAction>(types.START_GAME, () => initGame(params));
  yield takeLatest<ListeningGameAction>(types.LISTENING_GAME, () => listeningChanges(params));
  yield takeLatest<SendNumberAction>(types.SEND_NUMBER, (action) => sendNumber(action, params));
}
