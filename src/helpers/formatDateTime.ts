interface FormatDateTime {
  date: Date;
  locales?: string | string[];
  options?: Record<string, boolean | number | string>;
}

export const formatDateTime = ({
  date,
  locales = "default",
  options = {},
}: FormatDateTime): string => {
  return new Intl.DateTimeFormat(locales, {
    ...options,
  }).format(date);
};
