import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/stores/store";

import { INITIALSTATE } from "constant/state";
import { INotifyRequest } from "interface/redux";

// import { ADS_INITIALSTATE } from "./constant/initialState";
// import { EBuyingModel } from "./constant/adssetting";
// import { EFeedsType } from "./constant/adssize";

// import { IAdsSettings } from "./interfaces/initialState";

// interface IRange {
//   startDate: Date;
//   endDate: Date;
//   key: "selection";
// }

// export const getListPosts = createAsyncThunk("news/getListPosts", async (_, { rejectWithValue }) => {
//   try {
//     const response = await NewsAPI.newslist();
//     return response.getAllPosts;
//   } catch (error: any) {
//     if (!error.response) {
//       throw error;
//     }

//     return rejectWithValue(error.response);
//   }
// });

const globalSlice = createSlice({
  name: "global",
  initialState: INITIALSTATE,
  //   initialState: ADS_INITIALSTATE,

  reducers: {
    // ---- main handle ----------------------------

    closeNotify(state) {
      state.stateOpenNotify = false;
      // state.message = "";
      // state.format = null;
    },

    openNotify(state, action: PayloadAction<INotifyRequest>) {
      const object = action.payload;

      state.stateOpenNotify = true;
      state.message = object.message;
      state.format = object.format ? object.format : null;
    },
  },
  extraReducers: (builder) => {},
});

// Actions

export const globalAction = globalSlice.actions;

// Selectors

export const selectGlobal = (state: RootState) => state.global;

// Reducer
const globalReducer = globalSlice.reducer;
export default globalReducer;
