import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./index";

export const Store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
