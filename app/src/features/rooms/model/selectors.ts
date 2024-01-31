import { Selector } from 'reselect';
import { RootState } from 'shared/types';
import { IRoom } from './interfaces';

export const getSelectedRoomNameSelector: Selector<RootState, IRoom | null> = (state) =>
  state.room.selectedRoom;

export const getIsRoomReadySelector: Selector<RootState, boolean> = (state) =>
  state.room.isRoomReady;
