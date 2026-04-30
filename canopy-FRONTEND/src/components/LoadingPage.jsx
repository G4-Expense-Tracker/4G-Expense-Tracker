import { Box, Button, IconButton, Typography } from "@mui/material";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate } from "react-router-dom";
import pictLogo from "./pictLogo.png";

export default function LoadingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 390,
        height: 844,
        mx: "auto",
        mt: 4,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#329572",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          pt: 2,
          color: "white",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>9:41</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
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
        <Box
          component="img"
          src={pictLogo}
          alt="Logo"
          sx={{
            width: 120,
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: -30,
          width: 450,
          height: 450,
          background: "linear-gradient(180deg, #79be8d 0%, #8ac37d 100%)",
          borderRadius: "50% 50% 0 0 / 12% 12% 0 0",
          boxShadow: "inset 0 0 14px rgba(255,255,255,0.65)",
          textAlign: "center",
          pt: 6,
        }}
      >
        <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint sx={{ fontSize: 60, color: white }} />
        </IconButton>
    </Box>
    </Box>
  );
}