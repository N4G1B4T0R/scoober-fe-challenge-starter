import { SelectRoomAction, SelectRoomPayload } from './interfaces';
import { types } from './types';

export const selectRoom = (payload: SelectRoomPayload): SelectRoomAction => ({
  type: types.SELECT_ROOM,
  payload
});
