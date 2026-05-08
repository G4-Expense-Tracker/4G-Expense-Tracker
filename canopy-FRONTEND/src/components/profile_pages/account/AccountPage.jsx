import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
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
      {/* Top Green Header */}
      <Box
        sx={{
          bgcolor: "#A8BF7E",
          px: "22px",
          pt: "24px",
          pb: "18px",
        }}
      >
        {/* Status Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "36px",
            px: "10px",
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

        {/* Back + Title */}
        <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => navigate("/main")} sx={{ p: 0 }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 31, color: "#344D59" }} />
          </IconButton>

          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 32,
              fontWeight: 800,
              color: "#005844",
            }}
          >
            My Account
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          px: "22px",
          pt: "38px",
          pb: "20px",
        }}
      >
        {/* Profile Icon */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: "36px" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                bgcolor: "#005844",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
              }}
            >
              🌷
            </Box>

            <EditOutlinedIcon
              sx={{
                position: "absolute",
                top: 0,
                right: -18,
                fontSize: 23,
                color: "#005844",
              }}
            />
          </Box>
        </Box>

        {/* Name Inputs */}
        <Box sx={{ display: "flex", gap: "18px", mb: "14px" }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 17, mb: "8px", color: "#111" }}>
              First Name
            </Typography>
            <TextField
              fullWidth
              defaultValue="Hye"
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 17, mb: "8px", color: "#111" }}>
              Last Name
            </Typography>
            <TextField
              fullWidth
              defaultValue="Shim"
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* Email */}
        <Typography sx={{ fontSize: 17, mb: "8px", color: "#111" }}>
          Email
        </Typography>
        <TextField
          fullWidth
          defaultValue="Shim_Hye_Soo@gmail.com"
          sx={{ ...inputStyle, mb: "14px" }}
        />

        {/* Phone */}
        <Typography sx={{ fontSize: 17, mb: "8px", color: "#111" }}>
          Phone
        </Typography>
        <TextField
          fullWidth
          sx={{ ...inputStyle, mb: "14px" }}
        />

        {/* Password */}
        <Typography sx={{ fontSize: 17, mb: "8px", color: "#111" }}>
          Password
        </Typography>
        <TextField
          fullWidth
          type="password"
          defaultValue="password123"
          sx={{ ...inputStyle, mb: "36px" }}
        />

        {/* Save Button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              width: 210,
              height: 54,
              borderRadius: "30px",
              bgcolor: "#005844",
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#004333",
              },
            }}
          >
            Save
          </Button>
        </Box>
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
        <NavItem icon={<HomeOutlinedIcon />} label="Home" />
        <NavItem icon={<BarChartOutlinedIcon />} label="Expense" />

        {/* Middle Add Button */}
        <Box
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
          }}
        >
          <AddIcon sx={{ fontSize: 42, color: "#005844" }} />
        </Box>

        <Box sx={{ width: 58 }} />

        <NavItem icon={<EmojiEventsOutlinedIcon />} label="Goal" />
        <NavItem icon={<PersonIcon />} label="Profile" />
      </Box>
    </Box>
  );
}

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: 48,
    borderRadius: "30px",
    bgcolor: "#fff",
    fontSize: 16,

    "& fieldset": {
      borderColor: "#8FCFC0",
    },

    "&:hover fieldset": {
      borderColor: "#009D7A",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#005844",
    },
  },
};

function NavItem({ icon, label }) {
  return (
    <Box
      sx={{
        width: 58,
        textAlign: "center",
        fontSize: 13,
        color: "#005844",
      }}
    >
      <Box
        sx={{
          "& svg": {
            fontSize: 27,
          },
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontSize: 13, mt: "-4px" }}>{label}</Typography>
    </Box>
  );
}