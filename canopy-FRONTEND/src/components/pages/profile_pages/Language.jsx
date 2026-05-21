import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import FooterNav from "../../Footer/FooterNav";

function Language() {
  const navigate = useNavigate();

  // Ava's code:
  // Header component, FooterNav component,
  // language menu structure and page layout.

  // Tina:
  // Added responsive mobile layout styling,
  // centered the page for browser/mobile view,
  // matched spacing and typography to the Figma design,
  // aligned icons and language rows,
  // and connected back navigation to the Profile page.

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100vh",
        mx: "auto",

        // ================= THEME COLORS =================
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",

        // ================= FOOTER SPACE =================
        pb: "86px",
      }}
    >
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          height: 158,
          bgcolor: "secondary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* ================= BACK BUTTON ================= */}
        <IconButton
          onClick={() => navigate("/profile")}
          sx={{
            position: "absolute",
            left: 14,
            top: 76,
            color: "primary.main",
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: 28,
            }}
          />
        </IconButton>

        {/* ================= TITLE ================= */}
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 800,
            color: "primary.main",
          }}
        >
          Language
        </Typography>
      </Box>

      {/* ================= LANGUAGE LIST ================= */}
      <Box
        sx={{
          flexGrow: 1,
          pt: "70px",
          px: "34px",
        }}
      >
        {["Espanol", "Francais"].map((language, index) => (
          <Box
            key={language}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: index === 0 ? "42px" : 0,
              cursor: "pointer",
            }}
          >
            {/* ================= LANGUAGE NAME ================= */}
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              {language}
            </Typography>

            {/* ================= RIGHT ICON ================= */}
            <KeyboardArrowRightIcon
              sx={{
                color: "primary.main",
                fontSize: 34,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* ================= FOOTER ================= */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 390,
          zIndex: 20,
        }}
      >
        <FooterNav />
      </Box>
    </Box>
  );
}

export default Language;