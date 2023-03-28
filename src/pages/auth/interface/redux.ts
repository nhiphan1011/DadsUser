export interface IInitialState {
  loading: boolean;
  isAuth: boolean;
  error: null | string;
}

export interface IError {
  msg: string;
  success: boolean;
  [key: string]: any;
}

export interface ICheckUser {
  address: string;
}
export interface ILoginUser extends ICheckUser {}

export interface IWeb3Token {
  web3Token: string;
}

export interface IRegisterUser {
  address: string;
  referralOther?: string;
}
