import { Box, Button, Typography } from "@mui/material";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate } from "react-router-dom";
import pictLogo from "../../assets/pictLogo.png";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 390,
        height: 844,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.green",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "28px",
          pt: "24px",
          color: "text.secondary",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>

      <Box
        component="img"
        src={pictLogo}
        alt="Canopy Logo"
        sx={{
          position: "absolute",
          top: 245,
          left: "50%",
          transform: "translateX(-50%)",
          width: 110,
          zIndex: 3,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "-8%",
          width: "116%",
          height: 455,
          background: (theme) =>
            `linear-gradient(180deg, ${theme.palette.background.lightGreen} 0%, ${theme.palette.background.greenBottom} 100%)`,
          borderTopLeftRadius: "50% 8%",
          borderTopRightRadius: "50% 8%",
          boxShadow: "inset 0 0 18px rgba(255,255,255,0.7)",
          textAlign: "center",
          pt: 2.5,
        }}
      >
        <Typography
          sx={{
            color: "text.cream",
            fontFamily: "Georgia, serif",
            fontSize: 38,
            fontWeight: 700,
            mb: 6,
          }}
        >
          Welcome
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/login")}
            sx={{
              width: 220,
              height: 54,
              borderRadius: "30px",
              fontSize: 16,
              fontWeight: 700,
              color: "primary.main",
              borderColor: "#fff",
              backgroundColor: "rgba(255,255,255,0.35)",
              textTransform: "none",
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/signup")}
            sx={{
              width: 220,
              height: 54,
              borderRadius: "30px",
              fontSize: 16,
              fontWeight: 700,
              bgcolor: "primary.main",
              textTransform: "none",
              boxShadow: "none",
            }}
          >
            Create Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}