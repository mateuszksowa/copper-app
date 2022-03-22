import { createSlice } from "@reduxjs/toolkit";

import * as Services from "../services";
import { Currency } from "../types";
import { AppDispatch, RootState } from "./";

export const fetchCurrencies = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getCurrenciesRequest());
    try {
      const { data } = await Services.getCurrencies();
      dispatch(getCurrenciesSuccess(data));
    } catch (error) {
      dispatch(getCurrenciesFailure());
    }
  };
};

interface InitialState {
  loading: boolean;
  error: boolean;
  currencies: Record<string, Currency>;
}

export const initialState: InitialState = {
  loading: false,
  error: false,
  currencies: {},
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    getCurrenciesRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    getCurrenciesSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currencies = Object.fromEntries(
        payload.map((currency: Currency) => [currency.currency, currency])
      );
    },
    getCurrenciesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getCurrenciesRequest,
  getCurrenciesSuccess,
  getCurrenciesFailure,
} = currenciesSlice.actions;

export const currenciesSelector = (state: RootState) => state.currenciesState;

export default currenciesSlice.reducer;
