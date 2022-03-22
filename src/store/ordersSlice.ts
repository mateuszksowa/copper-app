import { createSlice } from "@reduxjs/toolkit";

import * as Services from "../services";
import { Order, OrderActionType } from "../types";
import { AppDispatch, RootState } from "./";

export const fetchOrders = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getOrdersRequest());
    try {
      const { data } = await Services.getOrders();
      dispatch(getOrdersSuccess(data));
    } catch (error) {
      dispatch(getOrdersFailure());
    }
  };
};

export const updateOrder = (
  orderId: string,
  orderActionType: OrderActionType
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(updateOrderRequest());
    try {
      const { data } = await Services.updateOrder({ orderId, orderActionType });
      dispatch(updateOrderSuccess(data));
    } catch (error) {
      dispatch(updateOrderFailure());
    }
  };
};

export const updateOrders = (
  orderIds: string[],
  orderActionType: OrderActionType
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(updateOrdersRequest());
    try {
      const { data } = await Services.updateOrders({
        orderIds,
        orderActionType,
      });
      dispatch(updateOrdersSuccess(data));
    } catch (error) {
      dispatch(updateOrdersFailure());
    }
  };
};

interface InitialState {
  bulkUpdating: boolean;
  singleUpdating: boolean;
  loading: boolean;
  error: boolean;
  orders: Order[];
}

export const initialState: InitialState = {
  bulkUpdating: false,
  singleUpdating: false,
  loading: false,
  error: false,
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrdersRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    getOrdersSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.orders = payload;
    },
    getOrdersFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    updateOrderRequest: (state) => {
      state.singleUpdating = true;
    },
    updateOrderSuccess: (state, { payload }) => {
      state.singleUpdating = false;
      state.orders = state.orders.map((item) => {
        if (item.orderId === payload.orderId) {
          return payload;
        }
        return item;
      });
    },
    updateOrderFailure: (state) => {
      state.error = true;
    },
    updateOrdersRequest: (state) => {
      state.bulkUpdating = true;
    },
    updateOrdersSuccess: (state, { payload }) => {
      state.bulkUpdating = true;
      state.orders = payload;
    },
    updateOrdersFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFailure,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFailure,
  updateOrdersRequest,
  updateOrdersSuccess,
  updateOrdersFailure,
} = ordersSlice.actions;

export const ordersSelector = (state: RootState) => state.ordersState;

export default ordersSlice.reducer;
