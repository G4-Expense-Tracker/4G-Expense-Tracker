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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("Shim_Hye_Soo@gmail.com");
  const [password, setPassword] = useState("1234567890");
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  function handleLogin() {
    setLoginFailed(true);
  }

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
        <IconButton
          onClick={() => navigate("/main")}
          sx={{ color: "#253b44", p: 0 }}
        >
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
        Welcome back!
      </Typography>

      <Typography sx={{ mb: 1 }}>User Name or Email Address *</Typography>

      <TextField
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

      <Typography sx={{ mb: 1, color: loginFailed ? "#ff3b30" : "inherit" }}>
        Password *
      </Typography>

      <TextField
        fullWidth
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setLoginFailed(false);
        }}
        type={showPassword ? "text" : "password"}
        error={loginFailed}
        helperText={loginFailed ? "Incorrect password. Please try again." : ""}
        variant="outlined"
        sx={{
          mb: 3.5,
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            bgcolor: "white",
            "& fieldset": {
              borderColor: loginFailed ? "#ff3b30" : "#4ab08f",
            },
            "&:hover fieldset": {
              borderColor: loginFailed ? "#ff3b30" : "#4ab08f",
            },
            "&.Mui-focused fieldset": {
              borderColor: loginFailed ? "#ff3b30" : "#4ab08f",
            },
          },
        }}
        FormHelperTextProps={{
          sx: {
            color: "#ff3b30",
            fontWeight: 600,
            mt: 1,
            ml: 1.5,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loginFailed ? (
                <LockOutlinedIcon sx={{ color: "#ff3b30" }} />
              ) : (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />

      <Button
        fullWidth
        variant="contained"
        onClick={handleLogin}
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

      <Typography
        sx={{
          color: "#004638",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Forgot your password?
      </Typography>

      <Box sx={{ mt: 25, textAlign: "center" }}>
        <Typography>
          Don’t have an account?{" "}
          <Link component={RouterLink} to="/signup" underline="none">
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}