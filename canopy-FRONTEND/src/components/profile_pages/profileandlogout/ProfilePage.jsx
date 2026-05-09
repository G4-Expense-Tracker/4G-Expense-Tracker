import {
  Box,
  Typography,
  IconButton,
  Switch,
} from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
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

import { useNavigate } from "react-router-dom";
import profilePic from "../../profile_pages/account/profilepic.png";

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 390,
        minHeight: 844,
        mx: "auto",
        bgcolor: "#FAFCF4",
        display: "flex",
        flexDirection: "column",
        color: "#005844",
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          height: 70,
          px: "34px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#FAFCF4",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#333" }}>
          9:41
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 17, color: "#333" }} />
          <WifiIcon sx={{ fontSize: 17, color: "#333" }} />
          <BatteryFullIcon sx={{ fontSize: 21, color: "#333" }} />
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          px: "20px",
          pt: "35px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 800,
            color: "#000",
            mb: "34px",
          }}
        >
          Profile
        </Typography>

        {/* Profile image */}
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
            color: "#000",
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
            bgcolor: "#EAF7D7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "24px",
            mb: "18px",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 800, color: "#000" }}>
              My Garden
            </Typography>
            <ForestOutlinedIcon sx={{ color: "#344D59", fontSize: 25 }} />
          </Box>

          <ArrowForwardIosIcon sx={{ color: "#005844", fontSize: 22 }} />
        </Box>

        {/* Categories + My Account */}
        <Box sx={{ display: "flex", gap: "18px", mb: "30px" }}>
          <SmallCard
            icon={<PieChartOutlineIcon />}
            title="Categories"
            onClick={() => navigate("/categories")}
          />

          <SmallCard
            icon={<PersonOutlineIcon />}
            title="My Account"
            onClick={() => navigate("/account")}
          />
        </Box>

        <MenuItem icon={<NotificationsNoneIcon />} text="Notifications" />
        <MenuItem icon={<SettingsOutlinedIcon />} text="Accessibility" />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "22px",
            px: "22px",
          }}
        >
          <DarkModeOutlinedIcon sx={{ fontSize: 28, color: "#005844", mr: 3 }} />
          <Typography sx={{ fontSize: 20, fontWeight: 800, color: "#000" }}>
            Dark Mode
          </Typography>

          <Switch
            sx={{
              ml: "auto",
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#EAF7D7",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                bgcolor: "#8FB35D",
              },
              "& .MuiSwitch-track": {
                bgcolor: "#8FB35D",
              },
            }}
          />
        </Box>

        <MenuItem icon={<LanguageOutlinedIcon />} text="Language" />
        <MenuItem
          icon={<LogoutOutlinedIcon />}
          text="Logout"
          onClick={() => navigate("/login")}
        />
      </Box>

      {/* Bottom Navigation */}
      <Box
        sx={{
          height: 90,
          bgcolor: "#A8BF7E",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
          color: "#005844",
        }}
      >
        <NavItem
          icon={<HomeOutlinedIcon />}
          label="Home"
          onClick={() => navigate("/dashboard")}
        />

        <NavItem
          icon={<BarChartOutlinedIcon />}
          label="Expense"
          onClick={() => navigate("/expense")}
        />

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
            border: "5px solid #A8BF7E",
            cursor: "pointer",
          }}
        >
          <AddIcon sx={{ fontSize: 42, color: "#005844" }} />
        </Box>

        <Box sx={{ width: 58 }} />

        <NavItem
          icon={<EmojiEventsOutlinedIcon />}
          label="Goal"
          onClick={() => navigate("/goal")}
        />

        <NavItem
          icon={<PersonIcon />}
          label="Profile"
          onClick={() => navigate("/profile")}
        />
      </Box>
    </Box>
  );
}

function SmallCard({ icon, title, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        flex: 1,
        height: 95,
        borderRadius: "18px",
        bgcolor: "#EAF7D7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#005844",
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
          color: "#000",
          mt: "8px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

function MenuItem({ icon, text, onClick }) {
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
          color: "#005844",
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
          color: "#000",
        }}
      >
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

      <Typography sx={{ fontSize: 13 }}>{label}</Typography>
    </Box>
  );
}