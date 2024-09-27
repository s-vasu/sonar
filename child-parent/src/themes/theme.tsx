import { createTheme } from "@mui/material/styles";


declare module "@mui/material/styles" {
  interface Palette {
    third: Palette["primary"];
    fourth: Palette["primary"];
  }

  interface PaletteOptions {
    third?: PaletteOptions["primary"];
    fourth?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#E8E7F0",
    },
    secondary: {
      main: "#A5A5A6", 
    },
    third: {
      main: "#6C5DD3",
    },
    fourth: {
      main: "#2D2D30", 
    },
  },
  typography: {
    h5: {
      fontFamily: "Gilroy",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "29.4px",
      letterSpacing: "-0.005em",
      textAlign: "left",
    },
    fontSize: 12,
  },
});

export default theme;
