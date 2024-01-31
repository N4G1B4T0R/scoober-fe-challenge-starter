import { ListeningGameAction, SendNumberAction, StartGameAction } from './interfaces';
import { types } from './types';

export const startGame = (): StartGameAction => ({
  type: types.START_GAME
});

export const listeningGame = (): ListeningGameAction => ({
  type: types.LISTENING_GAME
});

export const sendNumber = (payload: number): SendNumberAction => ({
  type: types.SEND_NUMBER,
  payload
});
