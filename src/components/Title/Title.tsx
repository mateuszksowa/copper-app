import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "./Title.module.css";

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <Box className={styles.title}>
      <Typography component="h1" variant="h6">
        {text}
      </Typography>
    </Box>
  );
};
