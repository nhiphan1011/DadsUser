import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { RootState } from "app/stores/store";

import { globalAction } from "globalSlice";

import { API_HOME, EBANNER_TYPE, NHOME_MODEL, SLICE_INIT } from "module/home";

export const getBanner = createAsyncThunk("home/getBanner", async (_, { rejectWithValue, dispatch }) => {
  try {
    const homebanner = (await API_HOME.getBanner(EBANNER_TYPE.home)).data;
    const topickbanner = (await API_HOME.getBanner(EBANNER_TYPE.topick)).data;
    const middlebanner = (await API_HOME.getBanner(EBANNER_TYPE.middle)).data;

    return [...homebanner, ...topickbanner, ...middlebanner];
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response);
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState: SLICE_INIT,

  reducers: {
    // ---- main handle ----------------------------

    resetInitialState(state) {},
  },
  extraReducers: (builder) => {
    builder

      // banner ---
      .addCase(getBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBanner.fulfilled, (state, action: PayloadAction<Array<NHOME_MODEL.IBanner>>) => {
        state.loading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(getBanner.rejected, (state, action: PayloadAction<any>) => {
        // Cookies.remove("br_tk");

        state.loading = false;
        state.list = [];
        state.error = action.payload;
      });
  },
});

// Actions

export const homeAction = homeSlice.actions;

// Selectors

export const selecthome = (state: RootState) => state.home;

// Reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;
