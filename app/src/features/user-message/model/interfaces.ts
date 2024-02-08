export enum UserMessageStatus {
  error = 'error',
  success = 'success'
}

export interface UserMessageProps {
  status: UserMessageStatus;
  message?: string;
}

export interface UserMessageState {
  data: UserMessageProps;
  isOpenUserMessage: boolean;
}
