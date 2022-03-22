export type OrderActionType = "approve" | "reject";

export type OrderStatus =
  | "canceled"
  | "executed"
  | "waiting-counterparty-approve";

export type OrderType = "buy" | "sell";

export interface Order {
  amount: string;
  baseCurrency: string;
  createdAt: Date | string;
  orderId: string;
  orderStatus: OrderStatus;
  orderType: OrderType;
  portfolioName: string;
  quoteAmount: string;
  quoteCurrency: string;
}

export interface UpdateOrderParams {
  orderId: string;
  orderActionType: OrderActionType;
}

export interface UpdateOrdersParams {
  orderIds: string[];
  orderActionType: OrderActionType;
}

export interface Currency {
  currency: string;
  mainCurrency: string;
  name: string;
  fiat: boolean;
  priority: string;
  confirmations: string;
  decimal: string;
  tags: string[];
  extra: Record<string, string>;
  explorerUrl: string;
  _embedded: {
    price: {
      baseCurrency: string;
      quoteCurrency: string;
      price: string;
    };
  };
}
