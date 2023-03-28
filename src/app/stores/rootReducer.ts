import globalReducer from "globalSlice";
import { authReducer } from "module/auth";
import { homeReducer } from "module/home";
import { productReducer } from "module/shoptoearn";
import { userReducer } from "module/user";
import { assistantReducer } from "module/assistant";

export const RootReducer = {
  global: globalReducer,
  auth: authReducer,
  home: homeReducer,
  product: productReducer,
  user: userReducer,
  assistant: assistantReducer
  // news: newsActionReducer,
};
