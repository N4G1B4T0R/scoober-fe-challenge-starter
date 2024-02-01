import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameStatus, PlaygroundState } from './interfaces';

const initialState: PlaygroundState = {
  isWinning: false,
  isGameFinished: false,
  status: GameStatus.play,
  messageList: []
};

const playgroundSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveMessage: (state, action) => {
      state.messageList.push(action.payload);
    },
    saveStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
    resetGame: () => initialState,
    saveResult: (state, action: PayloadAction<boolean>) => {
      state.isGameFinished = true;
      state.isWinning = action.payload;
      state.status = GameStatus.play;
    }
  }
});

export const { resetGame, saveResult, saveMessage, saveStatus } =
  playgroundSlice.actions;
export default playgroundSlice.reducer;
