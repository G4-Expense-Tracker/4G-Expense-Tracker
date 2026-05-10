import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  CircularProgress,
  TextField,
  IconButton,
  LinearProgress,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FooterNav from "../../Footer/FooterNav";

import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

export default function DashboardPage() {
  const navigate = useNavigate();

  const [goals, setGoals] = useState([
    {
      title: "Tuition",
      savedAmount: 0,
      targetAmount: 1000,
    },
    {
      title: "Nike Shoe",
      savedAmount: 50,
      targetAmount: 130,
    },
    {
      title: "Airpods",
      savedAmount: 150,
      targetAmount: 250,
    },
    {
      title: "Korea",
      savedAmount: 1500,
      targetAmount: 1800,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const current = goals[currentIndex];

  const progress =
    current.targetAmount > 0
      ? Math.min((current.savedAmount / current.targetAmount) * 100, 100)
      : 0;

  function getPlantImage() {
    if (progress === 0) return seed;
    if (progress < 40) return phase1;
    if (progress < 60) return phase2;
    if (progress < 85) return phase3;
    return phase4;
  }

  function handleBudgetChange(event) {
    const newAmount = Number(event.target.value);

    setGoals((prevGoals) =>
      prevGoals.map((goal, index) =>
        index === currentIndex
          ? {
              ...goal,
              savedAmount: newAmount,
            }
          : goal
      )
    );
  }

  function nextGoal() {
    setCurrentIndex((prev) => (prev + 1) % goals.length);
  }

  function previousGoal() {
    setCurrentIndex((prev) =>
      prev === 0 ? goals.length - 1 : prev - 1
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#F7F9F2",
        overflowX: "hidden",
        position: "relative",
        pb: 12,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          pt: 7,
          fontSize: 28,
          fontWeight: 700,
          color: "#004D40",
          fontFamily: "Georgia, serif",
        }}
      >
        Good Morning, Hye
      </Typography>

      <Box sx={{ px: 3, mt: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Enter New Budget"
          value={current.savedAmount}
          onChange={handleBudgetChange}
          sx={{
            bgcolor: "white",
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />
      </Box>

      <Box
        sx={{
          mt: 5,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={previousGoal}
          sx={{
            position: "absolute",
            left: 10,
            color: "#168C6C",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          sx={{
            position: "relative",
            width: 260,
            height: 260,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={100}
            size={230}
            thickness={4.5}
            sx={{
              color: "#FFD84D",
              position: "absolute",
            }}
          />

          <CircularProgress
            variant="determinate"
            value={progress}
            size={230}
            thickness={4.5}
            sx={{
              color: "#004D40",
              position: "absolute",
              transition: "all 0.5s ease",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 55,
              width: 42,
              height: 42,
              borderRadius: "50%",
              bgcolor: "#004D40",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 12,
              zIndex: 2,
            }}
          >
            {Math.round(progress)}%
          </Box>

          <Box
            sx={{
              width: 190,
              height: 190,
              borderRadius: "50%",
              bgcolor: "#FFF8CC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <Box
              component="img"
              src={getPlantImage()}
              alt="plant"
              sx={{
                width: 90,
                height: 90,
                objectFit: "contain",
                animation: "swing 2.5s ease-in-out infinite",
                transformOrigin: "bottom center",
                "@keyframes swing": {
                  "0%": { transform: "rotate(-4deg)" },
                  "50%": { transform: "rotate(4deg)" },
                  "100%": { transform: "rotate(-4deg)" },
                },
              }}
            />

            <Typography
              sx={{
                mt: 1,
                fontSize: 24,
                fontWeight: 800,
                color: "#004D40",
              }}
            >
              {current.title}
            </Typography>

            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "#004D40",
              }}
            >
              ${current.savedAmount} / {current.targetAmount}
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={nextGoal}
          sx={{
            position: "absolute",
            right: 10,
            color: "#168C6C",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          mx: 2.5,
          mt: 4,
          p: 2.5,
          borderRadius: 5,
          bgcolor: "#DFF0BF",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 22 }}>
          Daily Budget
        </Typography>

        <Typography sx={{ fontWeight: 800, fontSize: 34, mt: 1 }}>
          $50
        </Typography>

        <LinearProgress
          variant="determinate"
          value={90}
          sx={{
            mt: 2,
            height: 10,
            borderRadius: 10,
            bgcolor: "#F8F4D4",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#004D40",
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Box>
            <Typography sx={{ fontSize: 12 }}>Used</Typography>
            <Typography sx={{ fontWeight: 700, color: "#004D40" }}>
              $45
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: 12 }}>Remaining</Typography>
            <Typography sx={{ fontWeight: 700, color: "#004D40" }}>
              $5
            </Typography>
          </Box>
        </Box>
      </Box>

      <FooterNav />
    </Box>
  );
}