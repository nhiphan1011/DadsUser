export interface IContainer {
  className?: string;
  children?: Array<JSX.Element> | JSX.Element | string;
  maxWidth?: string;
  fluid?: boolean;
}

export interface INotify {
  className?: string;
  messege?: string;
  format?: string;
}
