import { Box, Typography } from "@mui/material";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate } from "react-router-dom";
import pictLogo from "../../assets/welcomeLogo.png";

export default function LoadingPage() {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/main")}
      sx={{
        width: 390,
        height: 844,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.green} 0%, ${theme.palette.background.greenBottom} 100%)`,
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", px: "34px", pt: "28px", color: "text.secondary" }}>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>
        <Box sx={{ display: "flex", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "39%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Box component="img" src={pictLogo} alt="Canopy Logo" sx={{ width: 105, mb: 2.5 }} />

        <Typography sx={{ color: "text.cream", fontFamily: "Georgia, serif", fontSize: 42 }}>
          Canopy
        </Typography>
      </Box>
    </Box>
  );
}