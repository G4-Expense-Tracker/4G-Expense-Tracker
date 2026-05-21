import { Box, Typography, Switch } from "@mui/material";

// import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
// import WifiIcon from "@mui/icons-material/Wifi";
// import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import FooterNav from "../../../Footer/FooterNav.jsx";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import profilePic from "../account/profilepic.png";

import { getUserSession } from "../../../../api/users.js";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  /* LIGHT / DARK COLORS */
  const bg = darkMode ? "primary.dark" : "background.default";
  const cardBg = darkMode ? "primary.main" : "secondary.light";
  const text = darkMode ? "primary.contrastText" : "text.primary";
  const green = darkMode ? "secondary.light" : "primary.main";

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {  
    async function getUser() {
      try {
        const sessionData = await getUserSession();
        setUser(sessionData.user);
      } catch (err) {
        console.error("Failed to fetch user session:", err);
      } finally {
        setLoadingUser(false);
      }
    }

    getUser();
  }, []);

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {  
    async function getUser() {
      try {
        const sessionData = await getUserSession();
        setUser(sessionData.user);
      } catch (err) {
        console.error("Failed to fetch user session:", err);
      } finally {
        setLoadingUser(false);
      }
    }

    getUser();
  }, []);

  return (
    <Box
      sx={{
        width: 390,
        minHeight: 844,
        mx: "auto",
        bgcolor: bg,
        display: "flex",
        flexDirection: "column",
        pb: 10,
      }}
    >
      {/* ================= STATUS BAR ================= */}
      <Box
        sx={{
          height: 74,
          px: "34px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: bg,
        }}
      >
        {/* <Typography
          sx={{
            fontWeight: 700,
            fontSize: 14,
            color: text,
          }}
        >
          9:41
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.3,
          }}
        >
          <SignalCellular4BarIcon sx={{ fontSize: 17, color: text }} />
          <WifiIcon sx={{ fontSize: 17, color: text }} />
          <BatteryFullIcon sx={{ fontSize: 21, color: text }} />
        </Box> */}
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          flexGrow: 1,
          px: "20px",
          pt: "36px",
        }}
      >
        {/* PAGE TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 800,
            color: text,
            mb: "34px",
          }}
        >
          Profile
        </Typography>

        {/* PROFILE IMAGE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "12px",
          }}
        >
          <Box
            component="img"
            src={profilePic}
            alt="Profile"
            sx={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* USER NAME */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 800,
            color: text,
            mb: "32px",
          }}
        >
          {loadingUser ? "..." : `${user.first_name}`}
        </Typography>

        {/* ================= MY GARDEN ================= */}
        <Box
          onClick={() => navigate("/garden")}
          sx={{
            height: 86,
            borderRadius: "18px",
            bgcolor: cardBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "24px",
            mb: "18px",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 800, color: text }}>
              My Garden
            </Typography>

            <ForestOutlinedIcon sx={{ color: green, fontSize: 25 }} />
          </Box>

          <ArrowForwardIosIcon sx={{ color: green, fontSize: 22 }} />
        </Box>

        {/* ================= CATEGORY + ACCOUNT ================= */}
        <Box sx={{ display: "flex", gap: "18px", mb: "30px" }}>
          <SmallCard
            icon={<PieChartOutlinedIcon />}
            title="Categories"
            onClick={() => navigate("/category")}
            cardBg={cardBg}
            text={text}
            green={green}
          />

          <SmallCard
            icon={<PermIdentityIcon />}
            title="My Account"
            onClick={() => navigate("/account")}
            cardBg={cardBg}
            text={text}
            green={green}
          />
        </Box>

        {/* Notifications */}
        <MenuItem
          icon={<NotificationsNoneIcon />}
          onClick={()=> navigate("/notifications")}
          text="Notifications"
          textColor={text}
          green={green}
        />

        {/* Accessibility */}
        <MenuItem
          icon={<SettingsOutlinedIcon />}
          onClick={()=> navigate("/accessibility")}
          text="Accessibility"
          textColor={text}
          green={green}
        />

        {/* ================= DARK MODE ================= */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "22px",
            px: "22px",
          }}
        >
          <DarkModeOutlinedIcon sx={{ fontSize: 28, color: green, mr: 3 }} />

          <Typography sx={{ fontSize: 20, fontWeight: 800, color: text }}>
            Dark Mode
          </Typography>

          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            sx={{
              ml: "auto",

              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "primary.contrastText",
              },

              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                bgcolor: "secondary.main",
                opacity: 1,
              },

              "& .MuiSwitch-track": {
                bgcolor: "secondary.main",
                opacity: 1,
              },
            }}
          />
        </Box>

        {/* Language */}
        <MenuItem
          icon={<LanguageOutlinedIcon />}
          text="Language"
          textColor={text}
          green={green}
          onClick={() => navigate("/language")}
        />

        {/* Logout */}
        <MenuItem
          icon={<LogoutOutlinedIcon />}
          text="Logout"
          textColor={text}
          green={green}
          onClick={() => navigate("/logout")}
        />
      </Box>

      {/* ================= FOOTER NAV ================= */}
      <FooterNav />
    </Box>
  );
}

/* ================= SMALL CARD ================= */

function SmallCard({ icon, title, onClick, cardBg, text, green }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        flex: 1,
        height: 95,
        borderRadius: "18px",
        bgcolor: cardBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: green,
      }}
    >
      <Box
        sx={{
          "& svg": {
            fontSize: 30,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 800,
          color: text,
          mt: "8px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

/* ================= MENU ITEM ================= */

function MenuItem({ icon, text, textColor, green, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        mb: "22px",
        px: "22px",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <Box
        sx={{
          color: green,
          mr: 3,

          "& svg": {
            fontSize: 28,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 800,
          color: textColor,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}