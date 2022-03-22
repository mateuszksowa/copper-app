import { COPPER_CURRENCIES_URL } from "../constants";

export const getCurrencyIconUrl = (currency: string): string => {
  return `${COPPER_CURRENCIES_URL}/${currency.toLowerCase()}.svg`;
};
