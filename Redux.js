import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./Slice";
const store = configureStore({
  reducer: {
    reducerList: listSlice,
  },
});
export default store;
