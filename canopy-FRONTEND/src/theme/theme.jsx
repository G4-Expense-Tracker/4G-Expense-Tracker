import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {

    // ================= PRIMARY COLORS =================
    primary: {
      main: "#005844",
      dark: "#00352C",
      contrastText: "#FFFFFF",
    },

    // ================= SECONDARY COLORS =================
    secondary: {
      main: "#B8DB9E",
      light: "#D9F0C8",
    },

    // ================= BACKGROUND COLORS =================
    background: {

      // Main app background
      default: "#F8FAF2",

      // Main green pages
      green: "#36956E",

      // Bottom curve gradient
      greenBottom: "#B8DB9E",

      // Lighter green gradient
      lightGreen: "#D9F0C8",

      // Cards/input fields
      paper: "#FFFFFF",
    },

    // ================= TEXT COLORS =================
    text: {
      primary: "#003D2B",
      secondary: "#FFFFFF",

      // Cream text for welcome/loading pages
      cream: "#FFF2C7",
    },

    // ================= ERROR COLORS =================
    error: {
      main: "#D94A4A",
    },
  },

  // ================= TYPOGRAPHY =================
  typography: {

    fontFamily: `"Poppins", "Arial", sans-serif`,

    h1: {
      fontSize: "48px",
      fontWeight: 700,
      color: "#0a0a0a",
      fontFamily: "Georgia, serif",
    },

    h2: {
      fontSize: "36px",
      fontWeight: 800,
      color: "#005844",
    },

    h3: {
      fontSize: "30px",
      fontWeight: 700,
      color: "#005844",
    },

    h4: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#005844",
    },

    body1: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#003D2B",
    },

    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "18px",
    },
  },

  // ================= GLOBAL SHAPES =================
  shape: {
    borderRadius: 20,
  },

  // ================= COMPONENT STYLING =================
  components: {

    // ================= BUTTONS =================
    MuiButton: {
      styleOverrides: {
        root: {

          borderRadius: "30px",

          padding: "10px 24px",

          boxShadow: "none",

          fontWeight: 700,

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },

    // ================= TEXTFIELDS =================
    MuiTextField: {
      styleOverrides: {
        root: {

          marginBottom: "16px",

          "& .MuiOutlinedInput-root": {

            borderRadius: "20px",

            backgroundColor: "#FFFFFF",

            "& fieldset": {
              borderColor: "#B8DB9E",
            },

            "&:hover fieldset": {
              borderColor: "#005844",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#005844",
            },
          },
        },
      },
    },

    // ================= SWITCHES =================
    MuiSwitch: {
      styleOverrides: {

        switchBase: {

          "&.Mui-checked": {
            color: "#FFFFFF",
          },

          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#005844",
            opacity: 1,
          },
        },

        track: {
          backgroundColor: "#B8DB9E",
          opacity: 1,
        },
      },
    },

    // ================= PAPER =================
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },

    // ================= CARDS =================
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        },
      },
    },
  },
});

export default theme;