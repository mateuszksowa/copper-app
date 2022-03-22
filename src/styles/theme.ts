import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6AEAD4",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#BDC6CF",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#30353B",
      secondary: "#86939E",
    },
    buy: {
      main: "#D2FFD8",
      contrastText: "#28CF3E",
    },
    sell: {
      main: "#FFECD2",
      contrastText: "#FFA428",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    caption: {
      color: "#86939E",
      fontSize: "11px",
      lineHeight: "14px",
      letterSpacing: "0px",
    },
    overline: {
      color: "#86939E",
      fontSize: "9px",
      lineHeight: "12px",
      letterSpacing: "0px",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "18px",
          minWidth: "100px",
          padding: "6px 24px",
          textTransform: "capitalize",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#86939E",
          fontSize: "9px",
          height: "16px",
          padding: "2px 8px",
          textTransform: "capitalize",
        },
      },
    },
  },
});
