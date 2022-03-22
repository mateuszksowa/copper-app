import { Typography } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";

export const renderAccountCell = (params: GridRowParams) => (
  <Typography variant="body2">{params.row.portfolioName}</Typography>
);
