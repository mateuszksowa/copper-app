import React, { useState } from "react";
import { DataGrid, GridRowId, GridRowParams } from "@mui/x-data-grid";

import { CustomToolbar } from "./components";
import { Order } from "../../types";

interface OrdersDataGridProps {
  loading: boolean;
  columns: any;
  rows: Order[];
}

export const OrdersDataGrid = ({
  loading,
  columns,
  rows,
}: OrdersDataGridProps) => {
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);

  return (
    <DataGrid
      autoHeight
      checkboxSelection
      columns={columns}
      density="comfortable"
      disableSelectionOnClick
      getRowId={(row) => row.orderId}
      headerHeight={25}
      hideFooter
      isRowSelectable={(params: GridRowParams) =>
        params.row.orderStatus === "waiting-counterparty-approve"
      }
      loading={loading}
      rows={rows}
      onSelectionModelChange={(newSelectionModel: GridRowId[]) => {
        setSelectionModel(newSelectionModel);
      }}
      selectionModel={selectionModel}
      components={{
        Toolbar: CustomToolbar,
      }}
      componentsProps={{
        toolbar: {
          setSelectionModel,
        },
      }}
      sx={{
        border: 0,
        minHeight: "480px",
        "& .MuiDataGrid-columnHeader:last-child": {
          paddingRight: 3,
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          color: "text.secondary",
          fontSize: "12px",
          fontWeight: "normal",
        },
        "& .MuiDataGrid-columnSeparator": {
          display: "none",
        },
        "& .MuiDataGrid-cell:last-child": {
          paddingRight: 3,
        },
      }}
    />
  );
};
