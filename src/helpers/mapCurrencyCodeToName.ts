import { Currency } from "../types";

export const mapCurrencyCodeToName = (
  currencies: Record<string, Currency>,
  currency: string
): string => {
  return currencies[currency]?.name;
};
