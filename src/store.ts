import { configureStore } from "@reduxjs/toolkit";
import zIndexSlice from "./features/zIndexStore/zIndexSlice";

const store = configureStore({
  reducer: {
    zIndexGlobal: zIndexSlice,
  },
});

export default store;
