import { Selector } from 'reselect';
import { RootState } from 'shared/types';

export const getUsernameSelector: Selector<RootState, string | undefined> = (state) =>
  state.auth.userInfo.user;
