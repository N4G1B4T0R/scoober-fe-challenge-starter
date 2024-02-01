import { createSelector, Selector } from 'reselect';
import { RootState } from 'shared/types';
import { GameStatus, IMessage } from './interfaces';

const getMessageList = (state: RootState) => state.playground.messageList;
const getGameStatus = (state: RootState) => state.playground.status;
const getUsername = (state: RootState) => state.auth.userInfo.user;

export const getIsGameFinishedSelector = (state: RootState) => state.playground.isGameFinished;
export const getIsWinningSelector = (state: RootState) => state.playground.isWinning;

export const getNumberSelector: Selector<RootState, number | undefined> = (state) =>
  state.playground.messageList[state.playground.messageList.length - 1]?.result;

export const getMessageListSelector: Selector<RootState, IMessage[]> = createSelector(
  [getMessageList, getUsername],
  (list, username) => {
    if (!list.length) return [];

    if (list.length === 1) {
      const [firstMessage] = list;
      console.log(firstMessage, 'firstMessage');
      return [
        {
          number: firstMessage.number,
          isCurrentUser: firstMessage.user === username,
          format: undefined,
          selectedNumber: undefined,
          result: undefined
        }
      ];
    }

    return list.filter((message: IMessage) => !message.isFirst);
  }
);

export const isTurnWaitingSelector: Selector<RootState, boolean> = createSelector(
  [getGameStatus],
  (status) => status === GameStatus.wait
);
