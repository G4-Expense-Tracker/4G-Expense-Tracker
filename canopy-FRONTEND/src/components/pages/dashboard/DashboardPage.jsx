import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FooterNav from "../../Footer/FooterNav";

const dashboards = [
  {
    title: "Click here",
    subtitle: "to set your goal",
    emoji: "🌱",
    savedAmount: 0,
    targetAmount: 0,
  },
  {
    title: "Tuition",
    emoji: "🌿",
    savedAmount: 0,
    targetAmount: 1000,
  },
  {
    title: "Nike Shoe",
    emoji: "🌿",
    savedAmount: 50,
    targetAmount: 130,
  },
  {
    title: "Airpods",
    emoji: "🌳",
    savedAmount: 150,
    targetAmount: 250,
  },
  {
    title: "Korea",
    emoji: "🌲",
    savedAmount: 1500,
    targetAmount: 1800,
  },
];

export default function DashboardPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = dashboards[currentIndex];

  const progress =
    current.targetAmount > 0
      ? Math.min((current.savedAmount / current.targetAmount) * 100, 100)
      : 0;

  function nextDashboard() {
    setCurrentIndex((prev) => (prev + 1) % dashboards.length);
  }

  function previousDashboard() {
    setCurrentIndex((prev) =>
      prev === 0 ? dashboards.length - 1 : prev - 1
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#f8fbf2",
        position: "relative",
        overflowX: "hidden",
        pb: 11,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3, pt: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 16 }} />
          <WifiIcon sx={{ fontSize: 16 }} />
          <BatteryFullIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          mt: 3,
          fontWeight: 700,
          fontSize: 24,
          fontFamily: "Georgia, serif",
        }}
      >
        Good Morning, Hye
      </Typography>

      <Box
        sx={{
          mt: 3,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={previousDashboard}
          sx={{ position: "absolute", left: 18, color: "#168c6c" }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          sx={{
            position: "relative",
            width: 250,
            height: 250,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* yellow background circle */}
          <CircularProgress
            variant="determinate"
            value={100}
            size={230}
            thickness={4.5}
            sx={{
              color: "#ffdb57",
              position: "absolute",
            }}
          />

          {/* green dynamic progress circle */}
          <CircularProgress
            variant="determinate"
            value={progress}
            size={230}
            thickness={4.5}
            sx={{
              color: "#00503f",
              position: "absolute",
              transition: "all 0.4s ease",
            }}
          />

          {/* inside circle */}
          <Box
            sx={{
              width: 195,
              height: 195,
              borderRadius: "50%",
              bgcolor: "#fff8cc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <Typography sx={{ fontSize: 52 }}>{current.emoji}</Typography>

            <Typography sx={{ fontWeight: 800, color: "#00503f", fontSize: 22 }}>
              {current.title}
            </Typography>

            <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#00503f" }}>
              {current.targetAmount > 0
                ? `$${current.savedAmount} / ${current.targetAmount}`
                : "to set your goal"}
            </Typography>
          </Box>

          {/* percent bubble */}
          {current.targetAmount > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 5,
                right: 70,
                width: 38,
                height: 38,
                borderRadius: "50%",
                bgcolor: "#00503f",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                zIndex: 2,
              }}
            >
              {Math.round(progress)}%
            </Box>
          )}
        </Box>

        <IconButton
          onClick={nextDashboard}
          sx={{ position: "absolute", right: 18, color: "#168c6c" }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          mx: 2.5,
          mt: 4,
          p: 2.5,
          borderRadius: 4,
          bgcolor: "#dff0bf",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        <Typography sx={{ color: "#00503f", fontWeight: 700, fontSize: 22 }}>
          Daily Budget
        </Typography>

        <Typography sx={{ fontWeight: 800, fontSize: 32, mt: 1 }}>
          $50
        </Typography>

        <LinearProgress
          variant="determinate"
          value={90}
          sx={{
            mt: 2,
            height: 10,
            borderRadius: 10,
            bgcolor: "#f8f4d4",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#00503f",
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Box>
            <Typography sx={{ fontSize: 12 }}>Used</Typography>
            <Typography sx={{ fontWeight: 700, color: "#00503f" }}>$45</Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: 12 }}>Remaining</Typography>
            <Typography sx={{ fontWeight: 700, color: "#00503f" }}>$5</Typography>
          </Box>
        </Box>
      </Box>

      <FooterNav />
    </Box>
  );
}