import { IGeneralAction } from '../../../shared/types';
import { types } from './types';

export interface IRoom {
  id: string;
  name: string;
  owner: string;
  type: string;
}
export interface RoomState {
  selectedRoom: IRoom | null;
  isRoomReady: boolean;
}

export interface SelectRoomResponse {
  message: string;
  room: string;
  user: any;
}

export interface SelectRoomPayload {
  name: string;
  type: string;
}

export type SelectRoomAction = IGeneralAction<types.SELECT_ROOM, SelectRoomPayload>;
