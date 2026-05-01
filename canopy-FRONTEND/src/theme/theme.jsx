import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004D3A",
      dark: "#00352c",
      contrastText: "#ffffff",
    },

    background: {
      default: "#F8FAF2",
      green: "#329572",
      greenBottom: "#75A85D",
      lightGreen: "#8EC87D",
    },

    text: {
      primary: "#003D2B",
      secondary: "#ffffff",
      cream: "#FFF7CF",
    },
  },

  typography: {
    fontFamily: "Arial, sans-serif",

    h4: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 20,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          padding: "10px 24px",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            backgroundColor: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;