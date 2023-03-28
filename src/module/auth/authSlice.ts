import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { RootState } from "app/stores/store";
import { connectWallet } from "hooks/walletAuthHooks";

import { userAction } from "module/user";
import { globalAction } from "globalSlice";
import authAPI from "./authAPI";

import { SLICE_INITIALSTATE } from "./constant/initialState";

import { NSlice } from "./interface";

import { handleSignWallet } from "utils/wallet";

const getNonce = async ({ address }: NSlice.IGetNonce) => {
  return await authAPI.getNonce({ address });
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ referralOther }: NSlice.IRegisterUser, { rejectWithValue, dispatch }) => {
    try {
      const { ethereum }: any = window;
      const wallet = await connectWallet();

      // --- Check for etherum and connect wallet ---

      if (!ethereum) {
        dispatch(globalAction.openNotify({ message: "Please install MetaMask to use our system", format: "error" }));
        throw rejectWithValue("Please install MetaMask to use our system");
      }
      if (typeof wallet !== "string") {
        dispatch(globalAction.openNotify({ message: (wallet as NSlice.IError).msg, format: "error" }));
        throw rejectWithValue((wallet as NSlice.IError).msg);
      }

      const response = await authAPI.registerUser({ address: wallet, referralOther });
      if (response) {
        const data = response.signupUser;
        if (!data.success) {
          dispatch(globalAction.openNotify({ message: (data as NSlice.IError).msg, format: "error" }));
          if (data.msg === "Your address wallet is existed!...") {
            dispatch(loginUser());
          }
          throw Error((data as NSlice.IError).msg, {
            cause: data,
          });
          // throw rejectWithValue((data as NSlice.IError).msg);
        } else {
          return data;
        }
      }
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      // return rejectWithValue(error.response.errors[0].extensions.code);
    }
  }
);
export const loginUser = createAsyncThunk("auth/loginUser", async (_, { rejectWithValue, dispatch }) => {
  try {
    const { ethereum }: any = window;
    const wallet = await connectWallet();

    // --- Check for etherum and connect wallet ---

    if (!ethereum) {
      dispatch(globalAction.openNotify({ message: "Please install MetaMask to use our system", format: "error" }));
      throw rejectWithValue("Please install MetaMask to use our system");
    }
    if (typeof wallet !== "string") {
      dispatch(globalAction.openNotify({ message: (wallet as NSlice.IError).msg, format: "error" }));
      throw rejectWithValue((wallet as NSlice.IError).msg);
    }

    // --- Check for nonce ---

    const fetnonce = await getNonce({ address: wallet });
    const { nonce } = fetnonce.getNonce.data;

    if (!fetnonce || !fetnonce.getNonce.success || !nonce) {
      dispatch(globalAction.openNotify({ message: (fetnonce.getNonce as NSlice.IError).msg, format: "error" }));
      throw rejectWithValue((fetnonce.getNonce as NSlice.IError).msg);
    }

    const token = await handleSignWallet(nonce, ethereum);

    if (!token) {
      dispatch(globalAction.openNotify({ message: "Something wrong with signing process", format: "error" }));
      throw rejectWithValue("Something wrong with signing process");
    }

    const result = await authAPI.loginUser({ web3Token: token });

    if (result.loginUser.success === false) {
      dispatch(globalAction.openNotify({ message: result.loginUser.msg, format: "error" }));
      throw rejectWithValue((result.LoginUser as NSlice.IError).msg);
    }

    dispatch(globalAction.openNotify({ message: "login success", format: "success" }));
    Cookies.set("br_tk", result.loginUser.accessToken, { expires: 4 });
    return result.loginUser;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.errors[0]);
  }
});
export const getUser = createAsyncThunk("auth/getUser", async (_, { rejectWithValue, dispatch }) => {
  try {
    const { ethereum }: any = window;
    Cookies.get("br_tk");

    if (ethereum.selectedAddress === null || !Cookies.get("br_tk")) {
      throw rejectWithValue("no user logined !!");
    }

    // const isUser = await authAPI.checkUser({ address: wallet });

    // if (isUser.checkUser.success) {
    //   const { nonce } = isUser.checkUser.data;
    //   const token = await handleSignWallet(nonce, ethereum);

    //   console.log("asfdadsf", token);

    //   if (token) {
    //     const result = await authAPI.loginUser({ web3Token: token });

    //     if (result.loginUser.success === true) {
    //       dispatch(globalAction.openNotify({ message: "login success", format: "success" }));
    //       Cookies.set("br_tk", result.loginUser.accessToken, { expires: 4 });
    //       return result.loginUser;
    //     }

    //     dispatch(globalAction.openNotify({ message: result.loginUser.msg, format: "error" }));
    //     throw rejectWithValue((result.LoginUser as NSlice.IError).msg);
    //   }
    //   dispatch(globalAction.openNotify({ message: "Something wrong with signing process", format: "error" }));
    //   throw rejectWithValue("Something wrong with signing process");
    // }
    // dispatch(globalAction.openNotify({ message: isUser.checkUser.msg, format: "error" }));
    // throw rejectWithValue((isUser.checkUser as NSlice.IError).msg);
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.errors[0]);
  }
});

export const getGoogleAuth = createAsyncThunk("auth/getUser", async (_, { rejectWithValue, dispatch }) => {
  try {
    const result = await authAPI.getUserGoogle();

    console.log("check result", result);
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.errors[0]);
  }
});

export const registerWithForm = createAsyncThunk(
  "auth/registerWithForm",
  async ({ addInput }: any, { rejectWithValue, dispatch }) => {
    try {
      const result = await authAPI.registerWithForm(addInput);

      if (!result.signupUser.success) {
      }

      dispatch(userAction.openSubmitForm());

      return result.signupUser.data;

      // return result.signupUser;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.errors[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: SLICE_INITIALSTATE,

  reducers: {
    // ---- main handle ----------------------------

    resetInitialState(state) {},

    logout(state) {
      Cookies.remove("br_tk");
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // register ---
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.isAuth = true;
        // state.error = null;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        Cookies.remove("br_tk");

        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      })
      .addCase(registerWithForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerWithForm.fulfilled, (state, action) => {
        state.loading = false;
        // state.isAuth = true;
        // state.error = null;
      })
      .addCase(registerWithForm.rejected, (state, action: PayloadAction<any>) => {
        Cookies.remove("br_tk");

        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      })

      // Login ---
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        Cookies.remove("br_tk");

        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      })

      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
        Cookies.remove("br_tk");

        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      });
  },
});

// Actions

export const authAction = authSlice.actions;

// Selectors

export const selectAuth = (state: RootState) => state.auth;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
