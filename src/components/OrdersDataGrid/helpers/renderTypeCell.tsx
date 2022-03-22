import { Box, Typography } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";

import { formatDateTime } from "../../../helpers";

export const renderTypeCell = (params: GridRowParams) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "40px",
      width: "40px",
    }}
  >
    <Box
      sx={{
        backgroundColor:
          params.row.orderType === "buy" ? "buy.main" : "sell.main",
        borderRadius: "12px",
        height: "24px",
        width: "24px",
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{
          color:
            params.row.orderType === "buy"
              ? "buy.contrastText"
              : "sell.contrastText",
          fontWeight: "500",
          lineHeight: "24px",
        }}
      >
        {params.row.orderType.charAt(0).toUpperCase()}
      </Typography>
    </Box>
    <Typography variant="overline">
      {formatDateTime({
        date: params.row.createdAt,
        options: {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        },
      })}
    </Typography>
  </Box>
);
