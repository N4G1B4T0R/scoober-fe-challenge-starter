import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomState, IRoom } from './interfaces';

const initialState: RoomState = {
  selectedRoom: null,
  isRoomReady: false
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    saveRoom: (state, action: PayloadAction<IRoom>) => {
      state.selectedRoom = action.payload;
    },
    saveIsRoomReady: (state, action: PayloadAction<boolean>) => {
      state.isRoomReady = action.payload;
    },
    resetRooms: () => initialState
  }
});

export const { saveRoom, saveIsRoomReady, resetRooms } = roomSlice.actions;

export default roomSlice.reducer;
