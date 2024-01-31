import { IGeneralAction } from 'shared/types';
import { types } from './types';

export type StartGameAction = IGeneralAction<types.START_GAME>;
export type ListeningGameAction = IGeneralAction<types.LISTENING_GAME>;
export type SendNumberAction = IGeneralAction<types.SEND_NUMBER, number>;

export enum GameStatus {
  play = 'play',
  wait = 'wait'
}

export interface IMessage {
  number?: number;
  result?: number;
  isCurrentUser?: boolean;
  selectedNumber?: number;
  user?: string;
  isFirst?: boolean;
  format?: string;
}

export interface PlaygroundState {
  status: GameStatus;
  isGameFinished: boolean;
  isWinning: boolean;
  randomNumber: number;
  messageList: IMessage[];
}

export interface ActivateYourTurnResponse {
  state: GameStatus;
  user: string;
}

export interface RandomNumberResponse {
  isCorrectResult: boolean;
  isFirst: boolean;
  number: number;
  selectedNumber: number;
  user: string;
}
