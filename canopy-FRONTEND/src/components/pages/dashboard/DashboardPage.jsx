import { Box, Button, Typography } from "@mui/material";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate } from "react-router-dom";
import pictLogo from "../../../assets/pictLogo.png";
import seed1 from "../../../assets/seed1.png";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        bgcolor: "#fafdf5",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3, pt: 2, color: "white" }}>
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 18 }} />
          <WifiIcon sx={{ fontSize: 18 }} />
          <BatteryFullIcon sx={{ fontSize: 20 }} />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Box component="img" src={seed1} alt="Logo" sx={{ width: 120 }} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "-8%",
          width: "116%",
          minHeight: "53svh",
          background: "linear-gradient(180deg, #fafdf5 0%, #fafdf5 100%)",
          borderRadius: "50% 50% 0 0 / 12% 12% 0 0",
          boxShadow: "inset 0 0 14px rgba(255,255,255,0.65)",
          textAlign: "center",
          pt: 6,
        }}
      >
        <Typography
          sx={{
            color: "#fff7cf",
            fontFamily: "Georgia, serif",
            fontSize: 44,
            fontWeight: 700,
            mb: 6,
          }}
        >
          Good Morning, User!
        </Typography>

        <Button
          variant="outlined"
          onClick={() => navigate("/login")}
          sx={{
            display: "block",
            width: 220,
            height: 58,
            mx: "auto",
            mb: 2,
            borderRadius: 8,
            color: "#004638",
            borderColor: "white",
            backgroundColor: "rgba(255,255,255,0.35)",
            textTransform: "none",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Login
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/signup")}
          sx={{
            display: "block",
            width: 220,
            height: 58,
            mx: "auto",
            borderRadius: 8,
            bgcolor: "#004638",
            textTransform: "none",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
}