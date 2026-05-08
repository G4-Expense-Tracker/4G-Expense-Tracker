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

/* Import profile image */
import profilePic from "../../assets/Profile Pic.png";

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
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          bgcolor: "#A8BF7E",
          px: "22px",
          pt: "24px",
          pb: "20px",
        }}
      >
        {/* Status Bar */}
        <Box
          sx={{
            height: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "30px",
            px: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 14,
              color: "#333",
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
                color: "#333",
              }}
            />

            <WifiIcon
              sx={{
                fontSize: 17,
                color: "#333",
              }}
            />

            <BatteryFullIcon
              sx={{
                fontSize: 21,
                color: "#333",
              }}
            />
          </Box>
        </Box>

        {/* Back Button + Title */}
        <Box
          sx={{
            position: "relative",
            height: 45,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => navigate("/dashboard")}
            sx={{ p: 0 }}
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 31,
                color: "#344D59",
              }}
            />
          </IconButton>

          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 32,
              fontWeight: 800,
              color: "#005844",
              whiteSpace: "nowrap",
            }}
          >
            My Account
          </Typography>
        </Box>
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          flexGrow: 1,
          px: "22px",
          pt: "38px",
        }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "36px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            {/* Profile Picture */}
            <Box
              sx={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={profilePic}
                alt="Profile"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Edit Icon */}
            <IconButton
              onClick={() => console.log("Edit profile image")}
              sx={{
                position: "absolute",
                top: -12,
                right: -30,
                p: 0,
              }}
            >
              <EditOutlinedIcon
                sx={{
                  fontSize: 23,
                  color: "#005844",
                }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* First + Last Name */}
        <Box
          sx={{
            display: "flex",
            gap: "18px",
            mb: "20px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>
              First Name
            </Typography>

            <TextField
              fullWidth
              defaultValue="Hye"
              sx={smallInputStyle}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>
              Last Name
            </Typography>

            <TextField
              fullWidth
              defaultValue="Shim"
              sx={smallInputStyle}
            />
          </Box>
        </Box>

        {/* Email */}
        <Box
          sx={{
            display: "flex",
            gap: "18px",
            mb: "20px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>
              Email
            </Typography>

            <TextField
              fullWidth
              defaultValue="Shim_Hye_Soo@gmail.com"
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* Phone */}
        <Typography sx={labelStyle}>
          Phone
        </Typography>

        <TextField
          fullWidth
          sx={{
            ...inputStyle,
            mb: "16px",
          }}
        />

        {/* Password */}
        <Typography sx={labelStyle}>
          Password
        </Typography>

        <TextField
          fullWidth
          type="password"
          defaultValue="password123"
          sx={{
            ...inputStyle,
            mb: "36px",
          }}
        />

        {/* Save Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "36px",
          }}
        >
          <Button
            onClick={() => navigate("/profile")}
            sx={{
              width: 210,
              height: 64,
              borderRadius: "30px",
              bgcolor: "#005844",
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
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

      {/* ================= BOTTOM NAVIGATION ================= */}
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
        {/* Home */}
        <NavItem
          icon={<HomeOutlinedIcon />}
          label="Home"
          onClick={() => navigate("/dashboard")}
        />

        {/* Expense */}
        <NavItem
          icon={<BarChartOutlinedIcon />}
          label="Expense"
          onClick={() => navigate("/expense")}
        />

        {/* Add Button */}
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
          <AddIcon
            sx={{
              fontSize: 42,
              color: "#005844",
            }}
          />
        </Box>

        {/* Empty Space */}
        <Box sx={{ width: 58 }} />

        {/* Goal */}
        <NavItem
          icon={<EmojiEventsOutlinedIcon />}
          label="Goal"
          onClick={() => navigate("/goal")}
        />

        {/* Profile */}
        <NavItem
          icon={<PersonIcon />}
          label="Profile"
          onClick={() => navigate("/account")}
        />
      </Box>
    </Box>
  );
}

/* ================= INPUT LABEL STYLE ================= */

const labelStyle = {
  fontSize: 17,
  mb: "8px",
  color: "#111",
};

/* ================= INPUT STYLE ================= */

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

/* Small Input Style */
const smallInputStyle = {
  ...inputStyle,
};

/* ================= NAV ITEM COMPONENT ================= */

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