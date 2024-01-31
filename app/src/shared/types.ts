import { AuthState } from './services/auth/interfaces';
import { UserMessageState } from 'features/user-message';
import { RoomState } from '../features/rooms/model/interfaces';
import { PlaygroundState } from 'widget/playground/model/interfaces';
import { Socket } from 'socket.io-client';

export interface IGeneralAction<AT, P = undefined> {
  type: AT;
  payload?: P;
  [key: string]: unknown;
}

export interface RootState {
  auth: AuthState;
  userMessage: UserMessageState;
  room: RoomState;
  playground: PlaygroundState;
}

export interface ISocketHandler {
  socket: typeof Socket;
  disconnect(): void;
  letsPlay(): void;
  sendNumber<Payload>(data: Payload): void;
  login<Payload, Response>(data: Payload): Promise<Response>;
  createEventChannel<Response>(eventName: string): any;
  joinRoom<Payload>(data: Payload): void;
}

export interface IAdditionalSagaParams {
  socket: ISocketHandler;
}
