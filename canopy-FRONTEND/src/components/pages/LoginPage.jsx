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

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 390,
        height: 844,
        mx: "auto",
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
        px: "28px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: "28px",
          color: "text.primary",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      <IconButton
        onClick={() => navigate("/main")}
        sx={{
          position: "absolute",
          top: "78px",
          left: "24px",
          p: 0,
          color: "text.primary",
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 22 }} />
      </IconButton>

      <Box
        sx={{
          mt: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: 34,
            fontWeight: 800,
            color: "text.primary",
            mb: "28px",
            width: "100%",
          }}
        >
          Welcome back!
        </Typography>

        <Typography sx={{ fontSize: 16, color: "text.primary", mb: "8px" }}>
          User Name or Email Address *
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          sx={{
            mb: "22px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              bgcolor: "#EDEDED",
              height: 52,
              "& fieldset": { borderColor: "#7CB9A6" },
            },
          }}
        />

        <Typography sx={{ fontSize: 16, color: "text.primary", mb: "8px" }}>
          Password *
        </Typography>

        <TextField
          fullWidth
          type="password"
          variant="outlined"
          sx={{
            mb: "30px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              bgcolor: "#EDEDED",
              height: 52,
              "& fieldset": { borderColor: "#7CB9A6" },
            },
          }}
        />

        <Button
          fullWidth
          sx={{
            height: 56,
            borderRadius: "30px",
            fontSize: 18,
            fontWeight: 700,
            textTransform: "none",
            bgcolor: "primary.main",
            color: "#fff",
            mb: "16px",
            boxShadow: "0px 6px 10px rgba(0,0,0,0.15)",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          Login
        </Button>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          Forgot your password?
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          width: "100%",
          left: 0,
          textAlign: "center",
        }}
      >
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