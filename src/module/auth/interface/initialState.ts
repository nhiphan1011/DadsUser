export namespace NInitialState {
  export interface ISLICE_INITIALSTATE {
    loading: boolean;
    isAuth: boolean;
    error: null | string;
  }
  export interface IREGISTER_INITIALSTATE {
    username: string;
    email: string;
    password: string;
  }
}
