import { LoginToGameAction, LoginToGamePayload } from './interfaces';
import { types } from './types';

export const login = (payload: LoginToGamePayload): LoginToGameAction => ({
  type: types.LOGIN_TO_GAME,
  payload
});
