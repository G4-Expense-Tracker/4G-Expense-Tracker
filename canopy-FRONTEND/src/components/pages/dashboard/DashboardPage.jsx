import { useState } from "react";
import { Box, Typography, IconButton, LinearProgress } from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Footer from "./Footer";

const dashboards = [
  { title: "Click here", subtitle: "to set your goal", emoji: "🌱", progress: 0 },
  { title: "Nike Shoe", subtitle: "$50 / 130", emoji: "🌿", progress: 38 },
  { title: "Airpods", subtitle: "$150 / 250", emoji: "🌳", progress: 60 },
  { title: "Korea", subtitle: "$1500 / 1800", emoji: "🌲", progress: 83 },
];

export default function DashboardPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = dashboards[currentIndex];

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
            width: 220,
            height: 220,
            border: "14px solid #ffdb57",
            borderRightColor: current.progress > 0 ? "#00503f" : "#ffdb57",
            borderRadius: "50%",
            bgcolor: "#fff8cc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: 52 }}>{current.emoji}</Typography>

          <Typography sx={{ fontWeight: 800, color: "#00503f", fontSize: 22 }}>
            {current.title}
          </Typography>

          <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
            {current.subtitle}
          </Typography>
        </Box>

        <IconButton
          onClick={nextDashboard}
          sx={{ position: "absolute", right: 18, color: "#168c6c" }}
        >
          <ChevronRightIcon />
        </IconButton>

        {current.progress > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 48,
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
            }}
          >
            {current.progress}%
          </Box>
        )}
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
            bgcolor: "#d8d8d8",
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