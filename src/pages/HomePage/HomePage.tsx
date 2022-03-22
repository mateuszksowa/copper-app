import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Paper } from "@mui/material";

import { OrdersDataGrid, Title } from "../../components";
import { getColumnsDefinitions } from "../../components/OrdersDataGrid/helpers";
import { currenciesSelector } from "../../store/currenciesSlice";
import { fetchOrders, ordersSelector } from "../../store/ordersSlice";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { currencies } = useSelector(currenciesSelector);
  const { loading, orders } = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const columns = useMemo(() => {
    return getColumnsDefinitions(currencies);
  }, [currencies]);

  const rows = useMemo(() => {
    return orders;
  }, [orders]);

  return (
    <Container className={styles.homePage} disableGutters>
      <Paper>
        <Title text="Transactions" />
        <OrdersDataGrid loading={loading} columns={columns} rows={rows} />
      </Paper>
    </Container>
  );
};
