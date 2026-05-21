import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FooterNav from "../../../Footer/FooterNav.jsx";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import SettingsIcon from "@mui/icons-material/Settings";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";

function Accessibility() {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Larger Text",
      icon: <FormatSizeIcon />,
    },
    {
      label: "Bold Text",
      icon: <FormatBoldIcon />,
    },
    {
      label: "Contrast",
      icon: <SettingsIcon />,
    },
    {
      label: "Text To Speech",
      icon: <InterpreterModeIcon />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
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
        }}
      >
        <IconButton
          onClick={() => navigate("/profile")}
          sx={{
            position: "absolute",
            left: 14,
            top: 76,
            color: "primary.main",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 28 }} />
        </IconButton>

        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 800,
            color: "primary.main",
          }}
        >
          Accessibility
        </Typography>
      </Box>

      {/* ================= MENU OPTION LIST ================= */}
      <Box
        sx={{
          flexGrow: 1,
          pt: "28px",
          px: "46px",
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: "grid",
              gridTemplateColumns: "36px 1fr 30px",
              alignItems: "center",
              mb: "28px",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                color: "primary.main",
                display: "flex",
                alignItems: "center",

                "& svg": {
                  fontSize: 28,
                },
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{
                fontSize: 21,
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              {item.label}
            </Typography>

            <KeyboardArrowRightIcon
              sx={{
                color: "primary.main",
                fontSize: 30,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* ================= FOOTER ================= */}
      <FooterNav />
    </Box>
  );
}

export default Accessibility;