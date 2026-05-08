import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_APP_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      navigate("/main");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 390,
          minHeight: 844,
          bgcolor: "#FAFCF4",
          px: "28px",
          pt: "24px",
          pb: "36px",
          display: "flex",
          flexDirection: "column",
          color: "#005844",
          transform: "scale(1.55)",
          transformOrigin: "top center",
        }}
      >
        {/* Status Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "48px",
            px: "12px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 14,
              color: "#333333",
            }}
          >
            9:41
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <SignalCellular4BarIcon
              sx={{
                fontSize: 18,
                color: "#333333",
              }}
            />

            <WifiIcon
              sx={{
                fontSize: 18,
                color: "#333333",
              }}
            />

            <BatteryFullIcon
              sx={{
                fontSize: 22,
                color: "#333333",
              }}
            />
          </Box>
        </Box>

        {/* Back Button */}
        <Box sx={{ mb: "48px" }}>
          <IconButton
            onClick={() => navigate("/main")}
            sx={{ p: 0 }}
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 34,
                color: "#344D59",
              }}
            />
          </IconButton>
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontSize: 40,
              fontWeight: 800,
              mb: "32px",
              color: "#005844",
              lineHeight: 1.1,
            }}
          >
            Welcome back!
          </Typography>

          {/* Email Label */}
          <Typography
            sx={{
              mb: "10px",
              fontSize: 18,
              color: "#111111",
            }}
          >
            User Name or Email Address *
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            sx={{
              mb: "28px",
              "& .MuiOutlinedInput-root": {
                height: 58,
                borderRadius: "30px",
                bgcolor: "#F7F7F7",

                "& fieldset": {
                  borderColor: "#9AD7C5",
                  borderWidth: "1.5px",
                },

                "&:hover fieldset": {
                  borderColor: "#009D7A",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#009D7A",
                },
              },
            }}
          />

          {/* Password Label */}
          <Typography
            sx={{
              mb: "10px",
              fontSize: 18,
              color: "#111111",
            }}
          >
            Password *
          </Typography>

          {/* Password Input */}
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffOutlinedIcon
                    sx={{
                      color: "#667085",
                      fontSize: 28,
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: "36px",

              "& .MuiOutlinedInput-root": {
                height: 58,
                borderRadius: "30px",
                bgcolor: "#F7F7F7",

                "& fieldset": {
                  borderColor: "#009D7A",
                  borderWidth: "1.5px",
                },

                "&:hover fieldset": {
                  borderColor: "#005844",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#005844",
                },
              },
            }}
          />

          {/* Error Message */}
          {error && (
            <Typography
              sx={{
                color: "error.main",
                mb: 2,
                fontSize: 14,
              }}
            >
              {error}
            </Typography>
          )}

          {/* Login Button */}
          <Button
            fullWidth
            onClick={handleLogin}
            disabled={!email || !password}
            sx={{
              height: 64,
              borderRadius: "30px",
              fontSize: 20,
              fontWeight: 700,
              textTransform: "none",
              bgcolor: "#005844",
              color: "#FFFFFF",
              mb: "24px",
              boxShadow: "none",

              "&:hover": {
                bgcolor: "#004333",
              },

              "&.Mui-disabled": {
                bgcolor: "#005844",
                color: "#FFFFFF",
                opacity: 1,
              },
            }}
          >
            Login
          </Button>

          {/* Forgot Password */}
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: "#005844",
              ml: "8px",
            }}
          >
            Forgot your password?
          </Typography>
        </Box>

        {/* Bottom Sign Up */}
        <Box
          sx={{
            textAlign: "center",
            mb: "72px",
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              color: "#111111",
            }}
          >
            Don’t have an account?{" "}
            <Box
              component="span"
              onClick={() => navigate("/signup")}
              sx={{
                color: "#3366FF",
                cursor: "pointer",
              }}
            >
              Sign up
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}