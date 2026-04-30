import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      height: 50,
      borderRadius: 8,
      bgcolor: "white",
      "& fieldset": { borderColor: "#8ecfbd" },
      "&:hover fieldset": { borderColor: "#4ab08f" },
      "&.Mui-focused fieldset": { borderColor: "#004638" },
    },
  };

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
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography sx={{ fontWeight: 700 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 16 }} />
          <WifiIcon sx={{ fontSize: 16 }} />
          <BatteryFullIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-start" }}>
        <IconButton onClick={() => navigate("/main")} sx={{ p: 0, color: "#253b44" }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>

      <Typography
        sx={{
          fontSize: 34,
          fontWeight: 800,
          color: "#004638",
          mb: 3,
        }}
      >
        Create an account
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ mb: 1 }}>First Name *</Typography>
          <TextField fullWidth sx={inputStyle} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ mb: 1 }}>Last Name *</Typography>
          <TextField fullWidth sx={inputStyle} />
        </Box>
      </Box>

      <Typography sx={{ mb: 1 }}>Email *</Typography>
      <TextField fullWidth type="email" sx={{ ...inputStyle, mb: 1.5 }} />

      <Typography sx={{ mb: 1 }}>Phone Number *</Typography>
      <TextField fullWidth type="tel" sx={{ ...inputStyle, mb: 1.5 }} />

      <Typography sx={{ mb: 1 }}>Password *</Typography>
      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        sx={{ ...inputStyle, mb: 1.5 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Typography sx={{ mb: 1 }}>Confirm Password *</Typography>
      <TextField
        fullWidth
        type={showConfirmPassword ? "text" : "password"}
        sx={{ ...inputStyle, mb: 1.5 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            sx={{ color: "#cfcfcf", "&.Mui-checked": { color: "#004638" } }}
          />
        }
        label={
          <Typography>
            I agree to the{" "}
            <Link component={RouterLink} to="/terms" underline="none">
              Terms of Service
            </Link>
          </Typography>
        }
        sx={{ mb: 3 }}
      />

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
        Create Account
      </Button>

      <Typography sx={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Link component={RouterLink} to="/login" underline="none">
          Sign in
        </Link>
      </Typography>
    </Box>
  );
}