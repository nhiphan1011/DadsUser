import { NUSER_INITITIAL_STATE } from "module/user";

export const DATA_INIT: NUSER_INITITIAL_STATE.IDATA_INIT = {
  location: "",
  gender: "",
  dateOfBirth: "",
  brandLove: "",
  category: [],
};

export const SLICE_INIT: NUSER_INITITIAL_STATE.ISLICE_INIT = {
  loading: false,
  submitform: false,
  error: null,
};
