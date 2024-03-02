import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchReducer,
    chat : chatReducer,

  },
});

export default store;
