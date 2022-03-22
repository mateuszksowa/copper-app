import { Box, Typography } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";

import { formatDateTime } from "../../../helpers";

export const renderDateCell = (params: GridRowParams) => (
  <Box
    sx={{
      background: "#F8FAFA",
      borderRadius: "6px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "40px",
      width: "40px",
    }}
  >
    <Typography variant="overline">
      {formatDateTime({
        date: params.row.createdAt,
        options: {
          month: "short",
        },
      })}
    </Typography>
    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1 }}>
      {formatDateTime({
        date: params.row.createdAt,
        options: {
          day: "2-digit",
        },
      })}
    </Typography>
  </Box>
);
