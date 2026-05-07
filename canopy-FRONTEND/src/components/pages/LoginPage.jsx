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
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "background.default",
        px: 3,
        pt: 2.5,
        pb: 4,
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
          <BatteryFullIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <IconButton onClick={() => navigate("/main")} sx={{ p: 0 }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: 34,
            fontWeight: 800,
            mb: 3,
          }}
        >
          Welcome back!
        </Typography>

        <Typography sx={{ mb: 1 }}>User Name or Email Address *</Typography>

        <TextField
          fullWidth
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          sx={{
            mb: 2.5,
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              bgcolor: "#EDEDED",
              height: 52,
              "& fieldset": { borderColor: "#7CB9A6" },
            },
          }}
        />

        <Typography sx={{ mb: 1 }}>Password *</Typography>

        <TextField
          fullWidth
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(''); }}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              bgcolor: "#EDEDED",
              height: 52,
              "& fieldset": { borderColor: "#7CB9A6" },
            },
          }}
        />

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
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
            fontSize: 18,
            fontWeight: 700,
            textTransform: "none",
            bgcolor: "primary.main",
            color: "#fff",
            mb: 2,
            boxShadow: "0px 8px 12px rgb(251, 250, 250)",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          Login
        </Button>

        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
          Forgot your password?
        </Typography>
      </Box>

      {/* Bottom (no absolute anymore) */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "#0F6FFF", fontWeight: 600, cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </Typography>
      </Box>
    </Box>
  );
}