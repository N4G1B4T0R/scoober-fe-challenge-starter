import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './interfaces';

const initialState: AuthState = {
  userInfo: {
    socketId: '',
    user: ''
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUsername: (state, action: PayloadAction<{ socketId: string; user: string }>) => {
      state.userInfo = action.payload;
    }
  }
});

export const { saveUsername } = authSlice.actions;
export default authSlice.reducer;
