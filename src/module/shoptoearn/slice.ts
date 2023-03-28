import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/stores";

import { SLICE_INIT, ShopAPI, NProductModel } from "module/shoptoearn";

import { IGetProductList, IGetShopList } from "module/shoptoearn";

// import { connectWallet } from "hooks/walletproductHooks";

// import { globalAction } from "globalSlice";

// import productAPI from "./productAPI";

// import { SLICE_INITIALSTATE } from "./constant/initialState";

// import { NSlice } from "./interface";

// import { handleSignWallet } from "utils/wallet";

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async ({ id }: IGetProductList, { rejectWithValue }) => {
    try {
      const result = await ShopAPI.getAllProduct(id);
      if (result.data) {
        return result.data;
      }
      throw Error("no data", {
        cause: result,
      });
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      // return rejectWithValue(error.response.errors[0].extensions.code);
    }
  }
);

export const getShopList = createAsyncThunk(
  "product/getShopList",
  async ({ id }: IGetShopList, { rejectWithValue }) => {
    try {
      const result = await ShopAPI.getAllShop(id);

      if (result.data) {
        return result.data;
      }

      throw Error("no data", {
        cause: result,
      });
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      // return rejectWithValue(error.response.errors[0].extensions.code);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: SLICE_INIT,

  reducers: {
    // ---- main handle ----------------------------

    resetInitialState(state) {},
  },
  extraReducers: (builder) => {
    builder

      // shop ---
      .addCase(getShopList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShopList.fulfilled, (state, action: PayloadAction<Array<NProductModel.IShop>>) => {
        state.loading = false;
        state.shopslist = action.payload;
        state.err = null;
      })
      .addCase(getShopList.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.shopslist = [];
        state.err = action.payload;
      })
      // product ---
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductList.fulfilled, (state, action: PayloadAction<Array<NProductModel.IProduct>>) => {
        state.loading = false;
        state.list = action.payload;
        state.err = null;
      })
      .addCase(getProductList.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.list = [];
        state.err = action.payload;
      });
  },
});

// Actions

export const productAction = productSlice.actions;

// Selectors

export const selectproduct = (state: RootState) => state.product;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
