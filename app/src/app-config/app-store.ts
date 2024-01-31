import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from 'shared/services/auth/slice';
import createSagaMiddleware from 'redux-saga';
import initSaga from './app-saga';

import { userMessageSlice } from 'features/user-message';
import { roomsApi } from 'features/rooms';
import roomSlice from 'features/rooms/model/slice';
import SocketHandler from './app-socket';

const sagaMiddleware = createSagaMiddleware();
const SocketClass = new SocketHandler();

const rootReducer = {
  auth: authSlice,
  userMessage: userMessageSlice,
  room: roomSlice,
  [roomsApi.reducerPath]: roomsApi.reducer
};

const params = {
  socket: SocketClass
};

const createStore = () => {
  const store = configureStore({
    reducer: {
      ...rootReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat([sagaMiddleware, roomsApi.middleware])
  });

  // @ts-ignore
  store.asyncReducers = {};
  // @ts-ignore
  store.injectReducer = (key: string, asyncReducer: any) => {
    // @ts-ignore
    store.asyncReducers[key] = asyncReducer;
    // @ts-ignore
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // @ts-ignore
  store.injectSaga = createSagaInjector(sagaMiddleware.run, initSaga, params);

  return store;
};

const createSagaInjector = (runSaga: any, rootSaga: any, params: any) => {
  const injectedSagas = new Map();
  const isInjected = (key: string) => injectedSagas.has(key);
  const injectSaga = (key: string, saga: any) => {
    if (isInjected(key)) return;
    const task = runSaga(saga, params);
    injectedSagas.set(key, task);
  };
  injectSaga('root', rootSaga);
  return injectSaga;
};

const createReducer = (asyncReducers: any) => {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers
  });
};

export const store = createStore();
