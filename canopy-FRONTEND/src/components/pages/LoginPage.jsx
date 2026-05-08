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
        headers: { "Content-Type": "application/json" },
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
        width: 390,
        minHeight: 844,
        mx: "auto",
        bgcolor: "#FAFCF4",
        px: "22px",
        pt: "24px",
        pb: "34px",
        display: "flex",
        flexDirection: "column",
        color: "#005844",
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "48px",
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

      {/* Back Button */}
      <Box sx={{ mb: "48px" }}>
        <IconButton onClick={() => navigate("/main")} sx={{ p: 0 }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 31, color: "#344D59" }} />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: 800,
            mb: "30px",
            color: "#005844",
            lineHeight: 1.1,
          }}
        >
          Welcome back!
        </Typography>

        <Typography sx={{ mb: "8px", fontSize: 17, color: "#111" }}>
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
            mb: "25px",
            "& .MuiOutlinedInput-root": {
              height: 58,
              borderRadius: "30px",
              bgcolor: "#fff",
              "& fieldset": {
                borderColor: "#8FCFC0",
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

        <Typography sx={{ mb: "8px", fontSize: 17, color: "#111" }}>
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffOutlinedIcon sx={{ color: "#566274" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: "36px",
            "& .MuiOutlinedInput-root": {
              height: 58,
              borderRadius: "30px",
              bgcolor: "#fff",
              "& fieldset": {
                borderColor: "#009D7A",
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
            height: 64,
            borderRadius: "30px",
            fontSize: 20,
            fontWeight: 700,
            textTransform: "none",
            bgcolor: "#005844",
            color: "#fff",
            mb: "22px",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#004333",
            },
            "&.Mui-disabled": {
              bgcolor: "#005844",
              color: "#fff",
              opacity: 1,
            },
          }}
        >
          Login
        </Button>

        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 700,
            color: "#005844",
            ml: "8px",
          }}
        >
          Forgot your password?
        </Typography>
      </Box>

      {/* Bottom Sign Up */}
      <Box sx={{ textAlign: "center", mb: "72px" }}>
        <Typography sx={{ fontSize: 17, color: "#111" }}>
          Don’t have an account?{" "}
          <Box
            component="span"
            onClick={() => navigate("/signup")}
            sx={{
              color: "#0F6FFF",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Sign up
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
