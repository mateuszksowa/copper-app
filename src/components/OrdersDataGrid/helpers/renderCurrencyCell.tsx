import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";

import { getCurrencyIconUrl, mapCurrencyCodeToName } from "../../../helpers";
import { Currency } from "../../../types";

export const renderCurrencyCell = (
  params: GridRowParams,
  currencies: Record<string, Currency>
) => (
  <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
    <Box sx={{ paddingLeft: "32px", position: "relative", width: "140px" }}>
      <Avatar
        src={getCurrencyIconUrl(params.row.baseCurrency)}
        sx={{
          position: "absolute",
          height: 24,
          width: 24,
          left: 0,
          top: 0,
        }}
      />
      <Typography variant="body2" noWrap>
        {mapCurrencyCodeToName(currencies, params.row.baseCurrency)}
      </Typography>
      <Typography variant="overline">{params.row.baseCurrency}</Typography>
    </Box>
    <ArrowForwardRoundedIcon sx={{ color: "text.secondary" }} />
    <Box sx={{ paddingLeft: "32px", position: "relative", width: "140px" }}>
      <Avatar
        src={getCurrencyIconUrl(params.row.quoteCurrency)}
        sx={{
          position: "absolute",
          height: 24,
          width: 24,
          left: 0,
          top: 0,
        }}
      />
      <Typography variant="body2" noWrap>
        {mapCurrencyCodeToName(currencies, params.row.quoteCurrency)}
      </Typography>
      <Typography variant="overline">{params.row.quoteCurrency}</Typography>
    </Box>
  </Stack>
);
