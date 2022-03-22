import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Header } from "../../components";

export const Layout = () => {
  return (
    <>
      <Container component="header" maxWidth={false}>
        <Header />
      </Container>
      <Container component="main" maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
