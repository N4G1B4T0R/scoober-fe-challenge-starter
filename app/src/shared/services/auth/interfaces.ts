import { IGeneralAction } from 'shared/types';
import { types } from './types';
import { NavigateFunction } from 'react-router-dom';

export interface AuthState {
  userInfo: {
    socketId: string;
    user: string | undefined;
  };
}

export interface LoginToGamePayload {
  username: string;
  navigate: NavigateFunction;
}

export interface LoginToGameResponse {
  message: string;
  socketId: string;
  user: string;
}

export type LoginToGameAction = IGeneralAction<types.LOGIN_TO_GAME, LoginToGamePayload>;
