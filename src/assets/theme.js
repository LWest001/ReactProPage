import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
    },
  },
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
      textAlign: "start",
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          alignItems: "center",
          padding: "12px !important",

          height: "100%",
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "grid" },
          style: {
            display: "flex",
            flexDirection: "column",
            boxShadow:
              "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
          },
        },
      ],
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
