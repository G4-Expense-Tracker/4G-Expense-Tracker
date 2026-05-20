import { Box, Button, Typography } from "@mui/material";
//import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
//import WifiIcon from "@mui/icons-material/Wifi";
//import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import { useNavigate } from "react-router-dom";
import mainLogo from "./images/mainLogo.png";
import theme from "../../../theme/theme";

export default function MainPage() {
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
        bgcolor: "background.green",
      }}
    >
      {/* <Box sx={{ display: "flex", justifyContent: "space-between", px: 3, pt: 2, color: "white" }}>
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 18 }} />
          <WifiIcon sx={{ fontSize: 18 }} />
          <BatteryFullIcon sx={{ fontSize: 20 }} />
        </Box>
      </Box> */}

      <Box
        sx={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Box component="img" src={mainLogo} alt="Logo" sx={{ width: 120 }} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "-18%",
          width: "136%",
          minHeight: "53svh",
          background: (theme) => 
            `linear-gradient(
              180deg,
               ${theme.palette.background.greenBottom} 0%,
               ${theme.palette.secondary.main} 100%
              )`,
          borderRadius: "50% 50% 0 0 / 12% 12% 0 0",
          boxShadow: "inset 0 0 22px rgba(255,255,255,0.45), 0 -1px 2px rgba(255,255,255,0.65) ",
          textAlign: "center",
          pt: 4,
        }}
      >
        <Typography
          sx={{
            color: "text.cream",
            fontFamily: "Georgia, serif",
            fontSize: 48,
            fontWeight: 700,
            mb: 7,
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
            mb: 2.5,
            borderRadius: "30px",
            color: "primary.dark",
            borderColor: "text.secondary",
            backgroundColor: "rgba(255,255,255,0.32)",
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
            borderRadius: "30px",
            bgcolor: "primary.dark",
            color: "primary.contrastText",
            textTransform: "none",
            fontSize: 18,
            fontWeight: 700,
            "&:hover": {
              bgcolor: "primary.main",
            }
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
}