import io, { Socket } from 'socket.io-client';
import { END, eventChannel } from 'redux-saga';
import { ISocketHandler } from 'shared/types';
class SocketHandler implements ISocketHandler {
  public socket: typeof Socket;
  constructor() {
    this.socket = io('http://localhost:8082', {
      reconnection: true,
      transports: ['websocket']
    });

    this.setupSocketEvents();
  }

  setupSocketEvents() {
    this.socket.on('connect', () => {
      console.info('Connected to Socket.IO');
    });

    this.socket.on('connect_error', (error: string) => {
      console.info('Socket.IO connection error:', error);
    });

    this.socket.on('disconnect', (reason: string) => {
      console.info('Disconnected from Socket.IO:', reason);
    });
  }
  disconnect() {
    this.socket.disconnect();
  }

  letsPlay() {
    this.logEvent('sendNumber');
    this.socket.emit('letsPlay');
  }

  sendNumber<Payload>(data: Payload) {
    this.logEvent('sendNumber', data);
    this.socket.emit('sendNumber', data);
  }

  login<Payload, Response>(data: Payload): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      const cleanup = () => {
        this.socket.off('message', messageHandler);
        this.socket.off('error', errorHandler);
      };

      const messageHandler = (response: Response) => {
        this.logEvent('login', response);
        resolve(response);
        cleanup();
      };

      const errorHandler = (error: { message: string }) => {
        reject(new Error(error.message));
        cleanup();
      };

      this.logEvent('login', data);
      this.socket.emit('login', data);

      this.socket.on('message', messageHandler);
      this.socket.on('error', errorHandler);
    });
  }

  createEventChannel = (eventName: string) => {
    return eventChannel((emit) => {
      this.socket.on(eventName, (res: END) => {
        this.logEvent(eventName, res);
        return emit(res);
      });
      return () => {
        this.socket.off(eventName);
        this.logEvent(eventName, 'closed');
      };
    });
  };

  joinRoom<Payload>(data: Payload) {
    this.logEvent('joinRoom', data);
    this.socket.emit('joinRoom', data);
  }

  private logEvent(eventName: string, eventData?: unknown) {
    console.info(`Emitting event: ${eventName}`, eventData || '');
  }
}

export default SocketHandler;
