import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlinedIcon />,
      path: "/dashboard",
    },
    {
      label: "Expense",
      icon: <BarChartIcon />,
      path: "/expenses",
    },
    {
      label: "Goal",
      icon: <EmojiEventsOutlinedIcon />,
      path: "/goal",
    },
    {
      label: "Profile",
      icon: <PersonIcon />,
      path: "/profile",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: 92,

        // ================= REMOVE GAP =================
        m: 0,
        p: 0,

        // ================= MUI THEME =================
        bgcolor: "secondary.main",

        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",

        position: "relative",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",

        boxShadow: "0 -4px 15px rgba(0,0,0,0.08)",
      }}
    >
      {/* ================= PLUS BUTTON ================= */}
      <Box
        onClick={() => navigate("/add-expense")}
        sx={{
          position: "absolute",
          top: -26,
          left: "50%",
          transform: "translateX(-50%)",
          width: 72,
          height: 72,
          borderRadius: "50%",

          // ================= MUI THEME =================
          bgcolor: "background.default",
          border: "5px solid",
          borderColor: "secondary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          cursor: "pointer",
        }}
      >
        <AddIcon
          sx={{
            fontSize: 42,

            // ================= MUI THEME =================
            color: "primary.main",
          }}
        />
      </Box>

      {/* ================= NAVIGATION ITEMS ================= */}
      {navItems.map((item, index) => {
        const isActive = currentPath === item.path;

        return (
          <Box
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",

              // Space for middle add button
              ml: index === 2 ? "58px" : 0,
            }}
          >
            {/* ================= ICON ================= */}
            <IconButton
              disableRipple
              sx={{
                p: 0,

                // ================= MUI THEME =================
                color: isActive
                  ? "primary.main"
                  : "primary.dark",

                "& svg": {
                  fontSize: 28,
                },

                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {item.icon}
            </IconButton>

            {/* ================= LABEL ================= */}
            <Typography
              sx={{
                mt: "2px",
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,

                // ================= MUI THEME =================
                color: isActive
                  ? "primary.main"
                  : "primary.dark",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default FooterNav;