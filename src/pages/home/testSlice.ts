import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/stores/store";

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

const testSlice = createSlice({
  name: "test",
  initialState: {},
  //   initialState: ADS_INITIALSTATE,

  reducers: {
    // ---- main handle ----------------------------

    resetInitialState(state) {},
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getListPosts.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getListPosts.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.posts = action.payload.data;
    //     state.error = null;
    //   })
    //   .addCase(getListPosts.rejected, (state, action: PayloadAction<any>) => {
    //     const { errors } = action.payload;
    //     state.loading = false;
    //     state.posts = [];
    //     state.error = errors;
    //   })
    //   // post by category
    //   .addCase(getPostsByCateID.pending, (state, action) => {
    //     state.loading = true;
    //   })
    //   .addCase(getPostsByCateID.fulfilled, (state, action) => {
    //     state.posts = action.payload;
    //     state.loading = false;
    //   })
    //   .addCase(getPostsByCateID.rejected, (state, action) => {
    //     state.loading = false;
    //   })
    //   // post detail
    //   .addCase(getDetail.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getDetail.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.postDetail = action.payload;
    //     state.error = null;
    //   })
    //   .addCase(getDetail.rejected, (state, action: PayloadAction<any>) => {
    //     // const { errors } = action.payload;
    //     state.loading = false;
    //     state.postDetail = null;
    //     // state.posts = [];
    //     state.error = null;
    //   })
    //   // categories
    //   .addCase(getNewsCategoriesList.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getNewsCategoriesList.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.categories = action.payload.data;
    //     state.error = null;
    //   })
    //   .addCase(getNewsCategoriesList.rejected, (state, action: PayloadAction<any>) => {
    //     // const { errors } = action.payload;
    //     state.loading = false;
    //     state.categories = [];
    //     // state.error = errors;
    //   });
  },
});

// Actions

export const testAction = testSlice.actions;

// Selectors

// export const selectTest = (state: RootState) => state.ads.adsSetting;

// Reducer
const testReducer = testSlice.reducer;
export default testReducer;
