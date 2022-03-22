interface FormatCurrencyAmount {
  amount: bigint | number;
  locales?: string | string[];
  options?: Record<string, boolean | number | string>;
}

export const formatCurrencyAmount = ({
  amount,
  locales = "default",
  options = {},
}: FormatCurrencyAmount): string => {
  return new Intl.NumberFormat(locales, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
    ...options,
  }).format(amount);
};
