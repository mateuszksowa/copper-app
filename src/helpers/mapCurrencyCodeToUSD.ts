import { Currency } from "../types";

export const mapCurrencyCodeToUSD = (
  currencies: Record<string, Currency>,
  currency: string
): string => {
  return currencies[currency]["_embedded"]["price"]["price"];
};
