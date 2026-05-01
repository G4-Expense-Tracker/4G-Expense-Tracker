import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: 390,
        height: 844,
        mx: "auto",
        mt: 4,
        bgcolor: "#f8fbf2",
        px: 2.5,
        pt: 2,
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 16 }} />
          <WifiIcon sx={{ fontSize: 16 }} />
          <BatteryFullIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* Back Button UNDER time (left aligned) */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          onClick={() => navigate("/main")}
          sx={{
            color: "#253b44",
            p: 0,
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: 34,
          fontWeight: 900,
          color: "#004638",
          mb: 3,
        }}
      >
        Welcome back!
      </Typography>

      {/* Username */}
      <Typography sx={{ mb: 1 }}>
        User Name or Email Address *
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        sx={{
          mb: 2.5,
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            bgcolor: "white",
            "& fieldset": { borderColor: "#4ab08f" },
          },
        }}
      />

      {/* Password */}
      <Typography sx={{ mb: 1 }}>Password *</Typography>

      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        variant="outlined"
        sx={{
          mb: 3.5,
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            bgcolor: "white",
            "& fieldset": { borderColor: "#4ab08f" },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Login Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          height: 56,
          borderRadius: 8,
          bgcolor: "#00503f",
          fontSize: 19,
          fontWeight: 700,
          textTransform: "none",
          mb: 2,
          "&:hover": { bgcolor: "#003f32" },
        }}
      >
        Login
      </Button>

      {/* Forgot password */}
      <Typography
        sx={{
          color: "#004638",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Forgot your password?
      </Typography>

      {/* Bottom link */}
      <Box sx={{ mt: 25, textAlign: "center" }}>
        <Typography>
          Don’t have an account?{" "}
          <Link
            component={RouterLink}
            to="/signup"
            underline="none"
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}