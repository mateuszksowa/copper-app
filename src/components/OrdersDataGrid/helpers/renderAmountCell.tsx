import { Box, Stack, Typography } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";

import { formatCurrencyAmount } from "../../../helpers";

export const renderAmountCell = (params: GridRowParams) => (
  <Stack direction="column" textAlign="right">
    <Box>
      <Typography component="span" variant="body2">
        {formatCurrencyAmount({ amount: params.row.amount })}{" "}
      </Typography>
      <Typography component="span" variant="overline">
        {params.row.baseCurrency}
      </Typography>
    </Box>
    <Box>
      <Typography component="span" variant="overline">
        {formatCurrencyAmount({ amount: params.row.quoteAmount })}{" "}
        {params.row.quoteCurrency}
      </Typography>
    </Box>
  </Stack>
);
