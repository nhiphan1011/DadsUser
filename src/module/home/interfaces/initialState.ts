import { NHOME_MODEL } from "module/home";

export interface ISlice_Init {
  loading: boolean;
  list: Array<NHOME_MODEL.IBanner>;
  error: null | any;
}
