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
        bgcolor: "#FAFCF4",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 390,
          minHeight: "100vh",
          px: 3,
          pt: 2.5,
          pb: 4,
          display: "flex",
          flexDirection: "column",
          color: "#004333",
        }}
      >
        {/* Status Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
            <WifiIcon sx={{ fontSize: 14 }} />
            <BatteryFullIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>

        {/* Back Button */}
        <Box sx={{ mb: 3 }}>
          <IconButton onClick={() => navigate("/main")} sx={{ p: 0 }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 22, color: "#6F7472" }} />
          </IconButton>
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontSize: 34,
              fontWeight: 800,
              mb: 3,
              color: "#004333",
            }}
          >
            Welcome back!
          </Typography>

          <Typography sx={{ mb: 1, fontSize: 15, color: "#004333" }}>
            User Name or Email Address *
          </Typography>

          <TextField
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                bgcolor: "#EEEEEE",
                height: 52,
                color: "#004333",
                "& fieldset": {
                  borderColor: "#8FC5B6",
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

          <Typography sx={{ mb: 1, fontSize: 15, color: "#004333" }}>
            Password *
          </Typography>

          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                bgcolor: "#EEEEEE",
                height: 52,
                color: "#004333",
                "& fieldset": {
                  borderColor: "#8FC5B6",
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

          {error && (
            <Typography sx={{ color: "error.main", mb: 2, fontSize: 14 }}>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            onClick={handleLogin}
            disabled={!email || !password}
            sx={{
              height: 60,
              borderRadius: "30px",
              fontSize: 16,
              fontWeight: 700,
              textTransform: "none",
              bgcolor: "#005844",
              color: "#002F26",
              mb: 2,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#004333",
                color: "#fff",
              },
              "&.Mui-disabled": {
                bgcolor: "#005844",
                color: "#00382E",
                opacity: 1,
              },
            }}
          >
            Login
          </Button>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#004333",
            }}
          >
            Forgot your password?
          </Typography>
        </Box>

        {/* Bottom Sign Up */}
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 14, color: "#004333" }}>
            Don’t have an account?{" "}
            <Box
              component="span"
              onClick={() => navigate("/signup")}
              sx={{
                color: "#0F6FFF",
                fontWeight: 700,
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