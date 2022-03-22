import { GridRowParams } from "@mui/x-data-grid";

import { Currency } from "../../../types";

import {
  renderAccountCell,
  renderActionsCell,
  renderAmountCell,
  renderCurrencyCell,
  renderDateCell,
  renderTypeCell,
} from "./";

export const getColumnsDefinitions = (currencies: Record<string, Currency>) => {
  return [
    {
      field: "date",
      headerName: "Date",
      headerAlign: "center",
      align: "center",
      width: 60,
      renderCell: (params: GridRowParams) => renderDateCell(params),
    },
    {
      field: "type",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 80,
      renderCell: (params: GridRowParams) => renderTypeCell(params),
    },
    {
      field: "account",
      headerName: "Account",
      headerAlign: "left",
      align: "left",
      width: 160,
      renderCell: (params: GridRowParams) => renderAccountCell(params),
    },
    {
      field: "currency",
      headerName: "Currency",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: (params: GridRowParams) =>
        renderCurrencyCell(params, currencies),
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "right",
      align: "right",
      width: 160,
      renderCell: (params: GridRowParams) => renderAmountCell(params),
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "right",
      align: "right",
      width: 260,
      renderCell: (params: GridRowParams) => renderActionsCell(params),
    },
  ];
};
