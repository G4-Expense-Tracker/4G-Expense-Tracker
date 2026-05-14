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
import { registerUser } from "../../../api/users";

export default function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSignup = async () => {
    setError("");

    if (!agreed) {
      setError("You must agree to the Terms of Service");
      return;
    }

    if (!firstName || !lastName || !email || !password || !phone) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await registerUser(firstName, lastName, email, password, phone)

      navigate("/onboarding");
    } catch (err) {
      setError(err.message);
    }
  };

  const inputStyle = {
    mb: 1.5,
    "& .MuiOutlinedInput-root": {
      height: 46,
      borderRadius: "28px",
      bgcolor: "#ffffff",
      "& fieldset": { borderColor: "#8FCDBE" },
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "background.default",
        px: 2.5,
        pt: 2,
        pb: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Status Bar */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>

      {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <IconButton onClick={() => navigate("/login")} sx={{ p: 0 }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ mb: 3, fontSize: 32, fontWeight: 800 }}>
          Create an account
        </Typography>

        {/* Name Row */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 14, mb: 0.5 }}>
              First Name *
            </Typography>
            <TextField 
              fullWidth
              onChange={(e) => setFirstName(e.target.value)}
              sx={inputStyle} 
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 14, mb: 0.5 }}>
              Last Name *
            </Typography>
            <TextField 
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
              sx={inputStyle} 
            />
          </Box>
        </Box>

        <Typography sx={{ fontSize: 14, mb: 0.5 }}>Email *</Typography>
        <TextField 
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          sx={inputStyle} 
        />

        <Typography sx={{ fontSize: 14, mb: 0.5 }}>
          Phone Number *
        </Typography>
        <TextField 
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
          sx={inputStyle} 
        />

        <Typography sx={{ fontSize: 14, mb: 0.5 }}>
          Password *
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          sx={inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
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

        <Typography sx={{ fontSize: 14, mb: 0.5 }}>
          Confirm Password *
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showConfirm ? "text" : "password"}
          sx={inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirm(!showConfirm)}>
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

        <FormControlLabel
          control={<Checkbox 
            size="small"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />}
          label={
            <Typography sx={{ fontSize: 13 }}>
              I agree to the{" "}
              <Link sx={{ color: "#2f6df6" }}>
                Terms of Service
              </Link>
            </Typography>
          }
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          onClick={handleSignup}
          sx={{
            height: 52,
            borderRadius: "28px",
            bgcolor: "primary.main",
            color: "#fff",
            fontSize: 17,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Create Account
        </Button>
      </Box>

      {/* Bottom */}
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>
          Already have an account?{" "}
          <Link onClick={() => navigate("/login")} underline="none">
            Sign in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}