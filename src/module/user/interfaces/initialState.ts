export namespace NUSER_INITITIAL_STATE {
  export interface IDATA_INIT {
    location: string;
    gender: string;
    dateOfBirth: string;
    brandLove: string;
    category: Array<string>;
  }

  export interface ISLICE_INIT {
    loading: boolean;
    submitform: boolean;
    error: null | string | any;
  }
}
