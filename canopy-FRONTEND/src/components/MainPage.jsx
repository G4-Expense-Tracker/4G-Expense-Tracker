import { Box, Button, Typography } from "@mui/material";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate } from "react-router-dom";
import pictLogo from "../assets/pictLogo.png";

export default function MainPage() {
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
        <Typography
          sx={{
            color: "#fff7cf",
            fontFamily: "Georgia, serif",
            fontSize: 44,
            fontWeight: 700,
            mb: 6,
          }}
        >
          Welcome
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
            fontSize: 18,
            fontWeight: 700,
            color: "#004638",
            borderColor: "white",
            backgroundColor: "rgba(255,255,255,0.35)",
            textTransform: "none",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "rgba(255,255,255,0.45)",
            },
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
            fontSize: 18,
            fontWeight: 700,
            bgcolor: "#004638",
            textTransform: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            "&:hover": {
              bgcolor: "#00352c",
            },
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
}
