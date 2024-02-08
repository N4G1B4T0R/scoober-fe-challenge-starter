import { Selector } from 'reselect';
import { RootState } from 'shared/types';
import { UserMessageState } from './interfaces';

export const userMessageSelector: Selector<RootState, UserMessageState> = (state) =>
  state.userMessage;

const selectors = {
  userMessageSelector
};

export default selectors;
