import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { GridRowId, useGridApiContext } from "@mui/x-data-grid";

import { formatCurrencyAmount, mapCurrencyCodeToUSD } from "../../../helpers";
import { currenciesSelector } from "../../../store/currenciesSlice";
import { updateOrders } from "../../../store/ordersSlice";

interface CustomToolbarProps {
  setSelectionModel: (selectedIds: GridRowId[]) => void;
}

export const CustomToolbar = ({ setSelectionModel }: CustomToolbarProps) => {
  const dispatch = useDispatch();
  const gridApi = useGridApiContext();
  const { currencies } = useSelector(currenciesSelector);

  const resetSelectedOrders = (): void => {
    setSelectionModel([]);
  };

  const handleApproveClick = (): void => {
    dispatch(updateOrders(selectedOrders, "approve"));
    resetSelectedOrders();
  };

  const handleRejectClick = (): void => {
    dispatch(updateOrders(selectedOrders, "reject"));
    resetSelectedOrders();
  };

  let totalSelectedAmount: number = 0;
  let selectedOrders: string[] = [];

  for (const [, value] of Array.from(gridApi.current.getSelectedRows())) {
    const { orderId, quoteAmount, quoteCurrency } = value;

    const quotePrice = mapCurrencyCodeToUSD(currencies, quoteCurrency);
    const quoteTotal = Number(quoteAmount) * Number(quotePrice);

    totalSelectedAmount += quoteTotal;
    selectedOrders.push(orderId);
  }

  return (
    <Container
      disableGutters={false}
      maxWidth={false}
      sx={{
        background: "#f8fafa",
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
        padding: "16px 24px",
        "& .MuiDivider-vertical:nth-of-type(n+3)": {
          display: "none",
        },
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <Typography variant="caption">Selected orders</Typography>
          <Typography variant="h6">{selectedOrders.length}</Typography>
        </Box>
        <Box>
          <Typography variant="caption">Total selected amount</Typography>
          <Typography variant="h6">
            {formatCurrencyAmount({
              amount: totalSelectedAmount,
              options: {
                style: "currency",
                currency: "USD",
                currencyDisplay: "code",
                maximumFractionDigits: 2,
              },
            })}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: "right" }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleRejectClick}
          >
            Reject
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleApproveClick}
            sx={{ marginLeft: 2 }}
          >
            Approve
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
