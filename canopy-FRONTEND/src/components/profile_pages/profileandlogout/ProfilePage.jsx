import { Box, Typography, Switch } from "@mui/material";

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

  const bg = darkMode ? "#10251F" : "#FAFCF4";
  const cardBg = darkMode ? "#1E3A31" : "#EAF7D7";
  const navBg = darkMode ? "#345044" : "#A8BF7E";
  const text = darkMode ? "#FFFFFF" : "#000000";
  const green = "#005844";

  return (
    <Box
      sx={{
        width: 390,
        minHeight: 844,
        mx: "auto",
        bgcolor: bg,
        display: "flex",
        flexDirection: "column",
        color: green,
      }}
    >
      {/* Status Bar */}
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
        <Typography sx={{ fontWeight: 700, fontSize: 14, color: text }}>
          9:41
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 17, color: text }} />
          <WifiIcon sx={{ fontSize: 17, color: text }} />
          <BatteryFullIcon sx={{ fontSize: 21, color: text }} />
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          px: "20px",
          pt: "36px",
        }}
      >
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

        <Box sx={{ display: "flex", justifyContent: "center", mb: "12px" }}>
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

        {/* My Garden */}
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
            <ForestOutlinedIcon sx={{ color: darkMode ? "#fff" : "#344D59" }} />
          </Box>

          <ArrowForwardIosIcon sx={{ color: darkMode ? "#fff" : green }} />
        </Box>

        {/* Cards */}
        <Box sx={{ display: "flex", gap: "18px", mb: "30px" }}>
          <SmallCard
            icon={<PieChartOutlinedIcon />}
            title="Categories"
            onClick={() => navigate("/categories")}
            cardBg={cardBg}
            text={text}
          />

          <SmallCard
            icon={<PermIdentityIcon />}
            title="My Account"
            onClick={() => navigate("/account")}
            cardBg={cardBg}
            text={text}
          />
        </Box>

        <MenuItem icon={<NotificationsNoneIcon />} text="Notifications" textColor={text} />
        <MenuItem icon={<SettingsOutlinedIcon />} text="Accessibility" textColor={text} />

        {/* Dark Mode Toggle */}
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

        <MenuItem icon={<LanguageOutlinedIcon />} text="Language" textColor={text} />

        <MenuItem
          icon={<LogoutOutlinedIcon />}
          text="Logout"
          textColor={text}
          onClick={() => navigate("/login")}
        />
      </Box>

      {/* Bottom Nav */}
      <Box
        sx={{
          height: 90,
          bgcolor: navBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
          color: green,
        }}
      >
        <NavItem icon={<HomeOutlinedIcon />} label="Home" onClick={() => navigate("/dashboard")} />
        <NavItem icon={<BarChartOutlinedIcon />} label="Expense" onClick={() => navigate("/expense")} />

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
          <AddIcon sx={{ fontSize: 42, color: green }} />
        </Box>

        <Box sx={{ width: 58 }} />

        <NavItem icon={<EmojiEventsOutlinedIcon />} label="Goal" onClick={() => navigate("/goal")} />
        <NavItem icon={<PersonIcon />} label="Profile" onClick={() => navigate("/profile")} />
      </Box>
    </Box>
  );
}

function SmallCard({ icon, title, onClick, cardBg, text }) {
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
        color: "#005844",
      }}
    >
      <Box sx={{ "& svg": { fontSize: 30 } }}>{icon}</Box>

      <Typography sx={{ fontSize: 20, fontWeight: 800, color: text, mt: "8px" }}>
        {title}
      </Typography>
    </Box>
  );
}

function MenuItem({ icon, text, textColor, onClick }) {
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
      <Box sx={{ color: "#005844", mr: 3, "& svg": { fontSize: 28 } }}>
        {icon}
      </Box>

      <Typography sx={{ fontSize: 20, fontWeight: 800, color: textColor }}>
        {text}
      </Typography>
    </Box>
  );
}

function NavItem({ icon, label, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 58,
        textAlign: "center",
        color: "#005844",
        cursor: "pointer",
      }}
    >
      <Box sx={{ height: 30, "& svg": { fontSize: 28 } }}>{icon}</Box>
      <Typography sx={{ fontSize: 13 }}>{label}</Typography>
    </Box>
  );
}