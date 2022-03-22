import { Button, Chip, Stack } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";

import { store } from "../../../store";
import { updateOrder } from "../../../store/ordersSlice";

export const renderActionsCell = (params: GridRowParams) => {
  if (
    params.row.orderStatus === "canceled" ||
    params.row.orderStatus === "executed"
  ) {
    return <Chip label={params.row.orderStatus} size="small" />;
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button
        color="secondary"
        variant="contained"
        onClick={() =>
          store.dispatch(updateOrder(params.row.orderId, "reject"))
        }
      >
        Reject
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          store.dispatch(updateOrder(params.row.orderId, "approve"))
        }
      >
        Approve
      </Button>
    </Stack>
  );
};
