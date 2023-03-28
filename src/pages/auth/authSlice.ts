// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
// import { ethers } from "ethers";

// import { RootState } from "app/stores/store";
// import { connectWallet } from "hooks/walletAuthHooks";

// import { globalAction } from "globalSlice";

// import authAPI from "./authAPI";

// import { INITIALSTATE } from "./constant/state";

// import { ICheckUser, IError, ILoginUser, IRegisterUser } from "./interface/redux";

// import { handleSignWallet } from "utils/wallet";

// // import { ADS_INITIALSTATE } from "./constant/initialState";
// // import { EBuyingModel } from "./constant/adssetting";
// // import { EFeedsType } from "./constant/adssize";

// // import { IAdsSettings } from "./interfaces/initialState";

// // interface IRange {
// //   startDate: Date;
// //   endDate: Date;
// //   key: "selection";
// // }

// // export const checkUser = createAsyncThunk("auth/checkUser", async ({ address }: ICheckUser, { rejectWithValue }) => {
// //   try {
// //     const response = await authAPI.checkUser({ address });
// //     if (response) {
// //       const data = response.checkUser;
// //       if (!data.success) {
// //         throw rejectWithValue((data as IError).msg);
// //       }
// //       return data;
// //     }
// //   } catch (error: any) {
// //     if (!error.response) {
// //       throw error;
// //     }
// //     return rejectWithValue(error.response.errors[0].extensions.code);
// //   }
// // });

// const getNonce = async ({ address }: any) => {
//   return await authAPI.getNonce({ address });
// };

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async ({ address, referralOther }: IRegisterUser, { rejectWithValue }) => {
//     try {
//       const response = await authAPI.registerUser({ address, referralOther });
//       if (response) {
//         const data = response.SignupUser;
//         if (!data.success) {
//           throw rejectWithValue((data as IError).msg);
//         }
//         return data;
//       }
//     } catch (error: any) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.errors[0].extensions.code);
//     }
//   }
// );
// export const loginUser = createAsyncThunk("auth/loginUser", async (_, { rejectWithValue, dispatch }) => {
//   try {
//     const { ethereum }: any = window;
//     const wallet = await connectWallet();

//     // --- Check for etherum and connect wallet ---

//     if (!ethereum) {
//       dispatch(globalAction.openNotify({ message: "Please install MetaMask to use our system", format: "error" }));
//       throw rejectWithValue("Please install MetaMask to use our system");
//     }
//     if (typeof wallet !== "string") {
//       dispatch(globalAction.openNotify({ message: (wallet as IError).msg, format: "error" }));
//       throw rejectWithValue((wallet as IError).msg);
//     }

//     // --- Check for nonce ---

//     const fetnonce = await getNonce({ wallet });
//     const { nonce } = fetnonce.getNonce.data;

//     if (!fetnonce || !fetnonce.getNonce.success || !nonce) {
//       dispatch(globalAction.openNotify({ message: (fetnonce.getNonce as IError).msg, format: "error" }));
//       throw rejectWithValue((fetnonce.getNonce as IError).msg);
//     }

//     const token = await handleSignWallet(nonce, ethereum);

//     if (!token) {
//       dispatch(globalAction.openNotify({ message: "Something wrong with signing process", format: "error" }));
//       throw rejectWithValue("Something wrong with signing process");
//     }

//     const result = await authAPI.loginUser({ web3Token: token });

//     if (result.loginUser.success === false) {
//       // if (result.loginUser.msg.includes("sign up")) {
//       //   dispatch(registerUser({ address }));
//       // }

//       dispatch(globalAction.openNotify({ message: result.loginUser.msg, format: "error" }));
//       throw rejectWithValue((result.LoginUser as IError).msg);
//     }

//     dispatch(globalAction.openNotify({ message: "login success", format: "success" }));
//     Cookies.set("br_tk", result.loginUser.accessToken, { expires: 4 });
//     return result.loginUser;
//   } catch (error: any) {
//     if (!error.response) {
//       throw error;
//     }
//     return rejectWithValue(error.response.errors[0]);
//   }
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: INITIALSTATE,

//   reducers: {
//     // ---- main handle ----------------------------

//     resetInitialState(state) {},

//     logout(state) {
//       state.isAuth = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder

//       // Login ---
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuth = true;
//         state.error = null;
//       })
//       .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
//         Cookies.remove("br_tk");

//         state.loading = false;
//         state.isAuth = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Actions

// export const authAction = authSlice.actions;

// // Selectors

// export const selectAuth = (state: RootState) => state.auth;

// // Reducer
// const authReducer = authSlice.reducer;
// export default authReducer;
