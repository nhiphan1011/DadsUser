import { NProductModel } from "./model";

export interface ISlice_Init {
  loading: boolean;
  shopslist: Array<NProductModel.IShop>;
  list: Array<NProductModel.IProduct>;
  err: null | any | string;
}
