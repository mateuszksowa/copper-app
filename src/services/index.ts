import { AxiosResponse } from "axios";

import API from "../api";

import { UpdateOrderParams, UpdateOrdersParams } from "../types";

export const getCurrencies = async (): Promise<AxiosResponse> => {
  return await API.get("/api/currencies-info");
};

export const getOrders = async (): Promise<AxiosResponse> => {
  return await API.get("/api/orders");
};

export const updateOrder = async ({
  orderId,
  orderActionType,
}: UpdateOrderParams): Promise<AxiosResponse> => {
  const requestHeaders = {
    headers: {
      "Content-Type": `application/vnd.${orderActionType}-order+json`,
    },
  };

  const requestData = {
    params: {
      orderId,
    },
  };

  return await API.patch(`/api/orders/${orderId}`, requestData, requestHeaders);
};

export const updateOrders = async ({
  orderIds,
  orderActionType,
}: UpdateOrdersParams): Promise<AxiosResponse> => {
  const requestHeaders = {
    headers: {
      "Content-Type": `application/vnd.bulk-${orderActionType}-order+json`,
    },
  };

  const requestData = {
    orderIds,
  };

  return await API.patch("/api/orders", requestData, requestHeaders);
};
