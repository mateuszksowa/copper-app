import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    buy?: {
      main?: string;
      contrastText?: string;
    };
    sell?: {
      main?: string;
      contrastText?: string;
    };
  }
}
