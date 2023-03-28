export interface IInnitialState {
  message: string;
  stateOpenNotify: boolean;
  format: null | string;
}

export interface INotifyRequest {
  message: string;
  format?: string;
}
