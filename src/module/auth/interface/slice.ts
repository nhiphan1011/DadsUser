export namespace NSlice {
  export interface IRegisterUser {
    // address: string;
    referralOther?: string;
  }
  export interface ILoginUser {
    address: string;
  }
  export interface IGetNonce extends ILoginUser {}
  export interface IError {
    msg: string;
    success: boolean;
    [key: string]: any;
  }
}
