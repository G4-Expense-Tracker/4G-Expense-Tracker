import { Box, Typography, Switch, Button } from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import profilePic from "../../profile_pages/account/profilepic.png";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  /* COLORS */
  const bg = darkMode ? "#16352C" : "#FAFCF4";
  const cardBg = darkMode ? "#27463C" : "#EAF7D7";
  const navBg = darkMode ? "#4F6B5D" : "#A8BF7E";
  const text = darkMode ? "#FFFFFF" : "#000000";
  const green = darkMode ? "#D7F5E8" : "#005844";

  return (
    <Box
      sx={{
        width: 390,
        minHeight: 844,
        mx: "auto",
        bgcolor: bg,
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
        <Typography
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
          <SignalCellular4BarIcon
            sx={{
              fontSize: 17,
              color: text,
            }}
          />

          <WifiIcon
            sx={{
              fontSize: 17,
              color: text,
            }}
          />

          <BatteryFullIcon
            sx={{
              fontSize: 21,
              color: text,
            }}
          />
        </Box>
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          flexGrow: 1,
          px: "20px",
          pt: "36px",
        }}
      >
        {/* TITLE */}
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

        {/* NAME */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 800,
            color: text,
            mb: "32px",
          }}
        >
          HYE
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 800,
                color: text,
              }}
            >
              My Garden
            </Typography>

            <ForestOutlinedIcon
              sx={{
                color: green,
                fontSize: 25,
              }}
            />
          </Box>

          <ArrowForwardIosIcon
            sx={{
              color: green,
              fontSize: 22,
            }}
          />
        </Box>

        {/* ================= CARDS ================= */}
        <Box
          sx={{
            display: "flex",
            gap: "18px",
            mb: "30px",
          }}
        >
          {/* Categories */}
          <SmallCard
            icon={<PieChartOutlinedIcon />}
            title="Categories"
            onClick={() => navigate("/categories")}
            cardBg={cardBg}
            text={text}
            green={green}
          />

          {/* My Account */}
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
          text="Notifications"
          textColor={text}
          green={green}
        />

        {/* Accessibility */}
        <MenuItem
          icon={<SettingsOutlinedIcon />}
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
          <DarkModeOutlinedIcon
            sx={{
              fontSize: 28,
              color: green,
              mr: 3,
            }}
          />

          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 800,
              color: text,
            }}
          >
            Dark Mode
          </Typography>

          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            sx={{
              ml: "auto",

              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#EAF7D7",
              },

              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                bgcolor: "#8FB35D",
                opacity: 1,
              },

              "& .MuiSwitch-track": {
                bgcolor: "#8FB35D",
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
        />

        {/* Logout */}
        <MenuItem
          icon={<LogoutOutlinedIcon />}
          text="Logout"
          textColor={text}
          green={green}
          onClick={() => setOpenLogout(true)}
        />
      </Box>

      {/* ================= BOTTOM NAVIGATION ================= */}
      <Box
        sx={{
          height: 90,
          bgcolor: navBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
        }}
      >
        {/* HOME */}
        <NavItem
          icon={<HomeOutlinedIcon />}
          label="Home"
          onClick={() => navigate("/dashboard")}
          green={green}
        />

        {/* EXPENSE */}
        <NavItem
          icon={<BarChartOutlinedIcon />}
          label="Expense"
          onClick={() => navigate("/expense")}
          green={green}
        />

        {/* ADD BUTTON */}
        <Box
          onClick={() => navigate("/add")}
          sx={{
            position: "absolute",
            top: -28,
            left: "50%",
            transform: "translateX(-50%)",
            width: 66,
            height: 66,
            borderRadius: "50%",
            bgcolor: "#F7F6D5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `5px solid ${navBg}`,
            cursor: "pointer",
          }}
        >
          <AddIcon
            sx={{
              fontSize: 42,
              color: "#005844",
            }}
          />
        </Box>

        {/* EMPTY SPACE */}
        <Box sx={{ width: 58 }} />

        {/* GOAL */}
        <NavItem
          icon={<EmojiEventsOutlinedIcon />}
          label="Goal"
          onClick={() => navigate("/goal")}
          green={green}
        />

        {/* PROFILE */}
        <NavItem
          icon={<PersonIcon />}
          label="Profile"
          onClick={() => navigate("/profile")}
          green={green}
        />
      </Box>

      {/* ================= LOGOUT POPUP ================= */}
      {openLogout && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 260,
              borderRadius: "10px",
              background:
                "linear-gradient(180deg, #1E9A77 0%, #A8BF7E 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: "24px",
            }}
          >
            {/* EXCLAMATION ICON */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "#FFFFFF",
                color: "#1E9A77",
                fontSize: 28,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: "26px",
              }}
            >
              !
            </Box>

            {/* TEXT */}
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: 26,
                lineHeight: 1.3,
                textAlign: "center",
                mb: "34px",
              }}
            >
              Are you sure
              <br />
              you want to log out?
            </Typography>

            {/* BUTTONS */}
            <Box
              sx={{
                display: "flex",
                gap: "18px",
              }}
            >
              {/* LOGOUT BUTTON */}
              <Button
                onClick={() => navigate("/main")}
                sx={{
                  width: 150,
                  height: 72,
                  borderRadius: "40px",
                  bgcolor: "#005844",
                  color: "#FFFFFF",
                  fontSize: 22,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  textTransform: "none",
                  boxShadow:"none",

                  "&:hover": {
                    bgcolor: "#004333",
                    boxShadow:"none"
                  },
                }}
              >
                Log Out
              </Button>

              {/* CANCEL BUTTON */}
              <Button
                onClick={() => setOpenLogout(false)}
                sx={{
                  width: 120,
                  height: 52,
                  borderRadius: "30px",
                  border: "2px solid #FFFFFF",
                  bgcolor: "rgba(255,255,255,0.25)",
                  color: "#005844",
                  fontSize: 18,
                  fontWeight: 800,
                  textTransform: "none",

                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.35)",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

/* ================= SMALL CARD ================= */

function SmallCard({
  icon,
  title,
  onClick,
  cardBg,
  text,
  green,
}) {
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

function MenuItem({
  icon,
  text,
  textColor,
  green,
  onClick,
}) {
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

/* ================= NAV ITEM ================= */

function NavItem({
  icon,
  label,
  onClick,
  green,
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 58,
        textAlign: "center",
        color: green,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          height: 30,

          "& svg": {
            fontSize: 28,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: 13,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}