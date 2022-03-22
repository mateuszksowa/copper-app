import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import currenciesReducer from "./currenciesSlice";
import ordersReducer from "./ordersSlice";

export const store = configureStore({
  reducer: {
    currenciesState: currenciesReducer,
    ordersState: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
