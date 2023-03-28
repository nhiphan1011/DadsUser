import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/stores";
import Cookies from "js-cookie";

import { globalAction } from "globalSlice";

import { NUSER_INITITIAL_STATE, SLICE_INIT, USER_API } from "module/user";

export const submitUser = createAsyncThunk(
  "user/submitUser",
  async ({ updateInput }: { updateInput: NUSER_INITITIAL_STATE.IDATA_INIT }, { rejectWithValue, dispatch }) => {
    try {
      const response = await USER_API.submitUserr({ updateInput });
      if (response) {
        // const data = response.updateSubmission;
        //   if (!data.success) {
        //     dispatch(globalAction.openNotify({ message: data.msg, format: "error" }));
        //     throw rejectWithValue(data.msg);
        //   }
        //   dispatch(userAction.closeSubmitFrom());
        //   return data;
      }
    } catch (error: any) {
      console.log("sdfa", error.payload);

      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.payload);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: SLICE_INIT,

  reducers: {
    // ---- main handle ----------------------------

    openSubmitForm(state) {
      state.submitform = true;
    },
    closeSubmitFrom(state) {
      state.submitform = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(submitUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitUser.fulfilled, (state, action) => {
        state.loading = false;
        //   state.isuser = true;
        state.error = null;
      })
      .addCase(submitUser.rejected, (state, action) => {
        // Cookies.remove("br_tk");
        state.loading = false;
        //   state.isuser = false;
        state.error = action.payload;
      });
  },
});

// Actions

export const userAction = userSlice.actions;

// Selectors

export const selectuser = (state: RootState) => state.user;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
