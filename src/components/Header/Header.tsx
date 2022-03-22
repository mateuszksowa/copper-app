import React from "react";
import { AppBar, Box, Link } from "@mui/material";

import { COPPER_SITE_URL } from "../../constants";

import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <AppBar className={styles.header} component="div" position="static">
      <Box className={styles.logo}>
        <Link href={COPPER_SITE_URL} rel="noreferrer" target="_blank">
          <img src={logo} alt="Copper logo" />
        </Link>
      </Box>
    </AppBar>
  );
};
