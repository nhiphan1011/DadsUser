import { NInitialState } from "module/auth/interface";

export const SLICE_INITIALSTATE: NInitialState.ISLICE_INITIALSTATE = {
  loading: true,
  isAuth: false,
  error: null,
};

export const REGISTER_INITIALSTATE: NInitialState.IREGISTER_INITIALSTATE = {
  username: "",
  email: "",
  password: "",
};
