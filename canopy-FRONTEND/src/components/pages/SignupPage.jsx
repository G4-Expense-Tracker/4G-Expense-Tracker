import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const inputStyle = {
    mb: "14px",
    "& .MuiOutlinedInput-root": {
      height: 46,
      borderRadius: "28px",
      bgcolor: "#ffffff",
      "& fieldset": { borderColor: "#8FCDBE" },
      "&:hover fieldset": { borderColor: "#8FCDBE" },
      "&.Mui-focused fieldset": { borderColor: "#8FCDBE" },
    },
  };

  return (
    <Box
      sx={{
        width: 390,
        height: 844,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        px: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: "18px",
          color: "text.primary",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>

      {/* Back Button - LEFT */}
      <IconButton
        onClick={() => navigate("/login")}
        sx={{
          mt: "22px",
          ml: "-8px",
          p: 0,
          color: "#2d3f49",
          display: "block",
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 22 }} />
      </IconButton>

      {/* Content */}
      <Box sx={{ mt: "36px", width: "100%", textAlign: "left" }}>
        <Typography
          sx={{
            mb: "24px",
            fontSize: 32,
            fontWeight: 800,
            color: "text.primary",
            lineHeight: 1.1,
          }}
        >
          Create an account
        </Typography>

        {/* First + Last Name */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 14, mb: "6px" }}>
              First Name *
            </Typography>
            <TextField fullWidth variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 14, mb: "6px" }}>
              Last Name *
            </Typography>
            <TextField fullWidth variant="outlined" sx={inputStyle} />
          </Box>
        </Box>

        <Typography sx={{ fontSize: 14, mb: "6px" }}>Email *</Typography>
        <TextField fullWidth variant="outlined" sx={inputStyle} />

        <Typography sx={{ fontSize: 14, mb: "6px" }}>Phone Number *</Typography>
        <TextField fullWidth variant="outlined" sx={inputStyle} />

        <Typography sx={{ fontSize: 14, mb: "6px" }}>Password *</Typography>
        <TextField
          fullWidth
          variant="outlined"
          type={showPassword ? "text" : "password"}
          sx={inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
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

        <Typography sx={{ fontSize: 14, mb: "6px" }}>
          Confirm Password *
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type={showConfirm ? "text" : "password"}
          sx={inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirm(!showConfirm)}
                  edge="end"
                >
                  {showConfirm ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Checkbox - LEFT */}
        <FormControlLabel
          control={<Checkbox size="small" sx={{ p: "4px" }} />}
          label={
            <Typography sx={{ fontSize: 13 }}>
              I agree to the{" "}
              <Link underline="none" sx={{ color: "#2f6df6" }}>
                Terms of Service
              </Link>
            </Typography>
          }
          sx={{
            mt: "4px",
            mb: "18px",
            ml: 0,
            display: "flex",
            justifyContent: "flex-start",
          }}
        />

        <Button
          fullWidth
          onClick={() => navigate("/main")}
          sx={{
            height: 52,
            borderRadius: "28px",
            bgcolor: "primary.main",
            color: "#fff",
            fontSize: 17,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "primary.dark",
              boxShadow: "none",
            },
          }}
        >
          Create Account
        </Button>

        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography sx={{ fontSize: 14 }}>
            Already have an account?{" "}
            <Link
              component="button"
              onClick={() => navigate("/login")}
              underline="none"
              sx={{ fontSize: 14 }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}