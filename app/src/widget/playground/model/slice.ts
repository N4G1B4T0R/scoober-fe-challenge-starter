import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameStatus, PlaygroundState } from './interfaces';

const initialState: PlaygroundState = {
  randomNumber: 0,
  isWinning: false,
  isGameFinished: false,
  status: GameStatus.play,
  messageList: []
};

const playgroundSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveNumber: (state, action: PayloadAction<number>) => {
      state.randomNumber = action.payload;
    },
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

export const { saveNumber, resetGame, saveResult, saveMessage, saveStatus } =
  playgroundSlice.actions;
export default playgroundSlice.reducer;
