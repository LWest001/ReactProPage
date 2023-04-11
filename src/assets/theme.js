import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    h1: {
      fontSize: "3.2rem",
      lineHeight: "1.1",
    },
    h2: {
      fontSize: "2rem",
      margin: "1rem 0",
    },
    h3: {
      fontSize: "1.5rem",
    },
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          backgroundColor: "aliceblue",
        },
        title: {
          fontSize: 20,
          width: "fit-content",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: 20,
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          [theme.breakpoints.only("xs")]: {
            gridColumn: "1/3",
          },
        },
      },
    },
  },
});

export default theme;
