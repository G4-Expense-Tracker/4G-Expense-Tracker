// Import useState for changing the current goal slide
import { useState } from "react";

// Import useNavigate to move between pages
import { useNavigate } from "react-router-dom";

// Import MUI components
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  LinearProgress,
} from "@mui/material";

// Import MUI icons
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Import plant images
import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

// Dashboard page component
export default function DashboardPage() {
  // Used to link buttons to other pages
  const navigate = useNavigate();

  // Keeps track of which goal is showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // Goal data for the circular progress section
  const goals = [
    {
      title: "Click here",
      subtitle: "to set your goal",
      savedAmount: null,
      targetAmount: null,
    },
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
  ];

  // Get the current selected goal
  const current = goals[currentIndex];

  // Calculate progress automatically
  const progress =
    current.targetAmount && current.savedAmount !== null
      ? Math.min((current.savedAmount / current.targetAmount) * 100, 100)
      : 0;

  // Choose plant image based on progress
  function getPlantImage() {
    if (progress === 0) return seed1;
    if (progress < 40) return phase1;
    if (progress < 60) return phase2;
    if (progress < 85) return phase3;
    return phase4;
  }

  // Go to next goal
  function nextGoal() {
    setCurrentIndex((prev) => (prev + 1) % goals.length);
  }

  // Go to previous goal
  function previousGoal() {
    setCurrentIndex((prev) => (prev === 0 ? goals.length - 1 : prev - 1));
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#F7F9F2",
        position: "relative",
        overflowX: "hidden",
        pb: 12,
      }}
    >
      {/* Top phone bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>9:41</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>▴⌁▮</Typography>
      </Box>

      {/* Greeting text */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 4,
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        Good Morning, Hye
      </Typography>

      {/* Circular progress area */}
      <Box
        sx={{
          mt: 5,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left arrow */}
        <IconButton
          onClick={previousGoal}
          sx={{
            position: "absolute",
            left: 12,
            color: "#168C6C",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Circle wrapper */}
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
          {/* Yellow full circle */}
          <CircularProgress
            variant="determinate"
            value={100}
            size={235}
            thickness={4.5}
            sx={{
              color: "#FFD84D",
              position: "absolute",
            }}
          />

          {/* Green progress circle */}
          <CircularProgress
            variant="determinate"
            value={progress}
            size={235}
            thickness={4.5}
            sx={{
              color: "#004D40",
              position: "absolute",
              transition: "all 0.5s ease",
            }}
          />

          {/* Percent bubble only shows when there is a real goal */}
          {current.targetAmount && (
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 50,
                width: 42,
                height: 42,
                borderRadius: "50%",
                bgcolor: "#004D40",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 700,
                fontSize: 12,
                zIndex: 2,
              }}
            >
              {Math.round(progress)}%
            </Box>
          )}

          {/* Inner circle */}
          <Box
            sx={{
              width: 195,
              height: 195,
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
            {/* Plant image */}
            <Box
              component="img"
              src={getPlantImage()}
              alt="plant"
              sx={{
                width: 95,
                height: 95,
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

            {/* Goal title */}
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

            {/* Goal amount or subtitle */}
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "#004D40",
              }}
            >
              {current.targetAmount
                ? `$${current.savedAmount} / ${current.targetAmount}`
                : current.subtitle}
            </Typography>
          </Box>
        </Box>

        {/* Right arrow */}
        <IconButton
          onClick={nextGoal}
          sx={{
            position: "absolute",
            right: 12,
            color: "#168C6C",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Scrollable cards row */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          gap: 2,
          overflowX: "auto",
          px: 2,
          pb: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Add New Card */}
        <Box
          onClick={() => navigate("/newgoal")}
          sx={{
            minWidth: 270,
            height: 150,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              bgcolor: "#FFF8CC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon sx={{ fontSize: 38, color: "#004D40" }} />
          </Box>

          <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#004D40" }}>
            Add New Card
          </Typography>
        </Box>

        {/* Daily Budget Card */}
        <Box
          sx={{
            minWidth: 270,
            height: 150,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.18)",
            p: 2,
          }}
        >
          <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 24 }}>
            Daily Budget
          </Typography>

          <Typography sx={{ fontWeight: 800, fontSize: 34 }}>$50</Typography>

          <LinearProgress
            variant="determinate"
            value={90}
            sx={{
              mt: 1.5,
              height: 10,
              borderRadius: 10,
              bgcolor: "#FFF8CC",
              "& .MuiLinearProgress-bar": {
                bgcolor: "#004D40",
              },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Box>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>Used</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#004D40" }}>
                $45
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                Remaining
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#004D40" }}>
                $5
              </Typography>
            </Box>
          </Box>

          {/* Three dots */}
          <Box sx={{ textAlign: "center", mt: -0.5 }}>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>●</Box>
            <Box component="span" sx={{ color: "#004D40", mx: 0.4 }}>●</Box>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>●</Box>
          </Box>
        </Box>

        {/* Recent Expense Card */}
        <Box
          sx={{
            minWidth: 270,
            height: 150,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.18)",
            p: 2,
          }}
        >
          <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 24 }}>
            Recent Expense
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                bgcolor: "#9AB46B",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ☕
            </Box>

            <Box>
              <Typography sx={{ fontSize: 26, fontWeight: 500 }}>
                Starbucks
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  px: 1.5,
                  py: 0.3,
                  borderRadius: 5,
                  bgcolor: "#FFF8CC",
                  fontSize: 14,
                }}
              >
                Sun, April 7 | 6:00 am
              </Typography>
            </Box>
          </Box>

          {/* Three dots */}
          <Box sx={{ textAlign: "center", mt: 1.5 }}>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>●</Box>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>●</Box>
            <Box component="span" sx={{ color: "#004D40", mx: 0.4 }}>●</Box>
          </Box>
        </Box>
      </Box>

      {/* Footer navigation */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 390,
          height: 75,
          bgcolor: "#A8BF7D",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <Box onClick={() => navigate("/main")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <HomeIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Home</Typography>
        </Box>

        <Box onClick={() => navigate("/expense")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <BarChartIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Expense</Typography>
        </Box>

        <Box
          onClick={() => navigate("/newgoal")}
          sx={{
            width: 58,
            height: 58,
            borderRadius: "50%",
            bgcolor: "#FFF8CC",
            border: "4px solid #A8BF7D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: -5,
            cursor: "pointer",
          }}
        >
          <AddIcon sx={{ fontSize: 38, color: "#004D40" }} />
        </Box>

        <Box onClick={() => navigate("/goals")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <EmojiEventsIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Goal</Typography>
        </Box>

        <Box onClick={() => navigate("/account")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <PersonIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Profile</Typography>
        </Box>
      </Box>
    </Box>
  );
}
