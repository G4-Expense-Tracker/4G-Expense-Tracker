// Import useState for changing pages/slides
import { useState } from "react";

// Import navigation between pages
import { useNavigate } from "react-router-dom";

// Import Material UI components
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  LinearProgress,
  Button,
} from "@mui/material";

// Import icons
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

// Import plant images
import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

// Main dashboard component
export default function DashboardPage() {

  // This allows page navigation
  const navigate = useNavigate();

  // Array for all dashboard goal cards
  const goals = [

    // First empty goal
    {
      title: "Click here",
      subtitle: "to set your goal",
      savedAmount: null,
      targetAmount: null,
    },

    // Second goal
    {
      title: "Nike Shoe",
      savedAmount: 50,
      targetAmount: 130,
    },

    // Third goal
    {
      title: "Airpods",
      savedAmount: 150,
      targetAmount: 250,
    },

    // Fourth goal
    {
      title: "Korea",
      savedAmount: 1500,
      targetAmount: 1800,
    },
  ];

  // Keeps track of current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Current selected card
  const current = goals[currentIndex];

  // Automatically calculate progress percentage
  const progress =
    current.targetAmount && current.savedAmount !== null
      ? Math.min(
          (current.savedAmount / current.targetAmount) * 100,
          100
        )
      : 0;

  // Change plant image depending on progress
  function getPlantImage() {

    // Show seed image
    if (progress === 0) return seed1;

    // Show first growth image
    if (progress < 40) return phase1;

    // Show second growth image
    if (progress < 60) return phase2;

    // Show third growth image
    if (progress < 85) return phase3;

    // Show final tree image
    return phase4;
  }

  // Go to next goal card
  function nextGoal() {
    setCurrentIndex(
      (prev) => (prev + 1) % goals.length
    );
  }

  // Go to previous goal card
  function previousGoal() {
    setCurrentIndex(
      (prev) =>
        prev === 0
          ? goals.length - 1
          : prev - 1
    );
  }

  // Main page UI
  return (

    // Whole page container
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

      {/* Top status bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
        }}
      >

        {/* Time */}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          9:41
        </Typography>

        {/* Fake signal icons */}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          ▴⌁▮
        </Typography>
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

      {/* Circle progress section */}
      <Box
        sx={{
          mt: 5,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        {/* Left arrow button */}
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

          {/* Yellow background circle */}
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

          {/* Green automatic progress */}
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

          {/* Show percent only if goal exists */}
          {current.targetAmount && (

            // Percent bubble
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
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 12,
                zIndex: 2,
              }}
            >
              {/* Rounded percent */}
              {Math.round(progress)}%
            </Box>
          )}

          {/* Inside circle */}
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

                // Plant size
                width: 95,
                height: 95,

                // Keep image ratio
                objectFit: "contain",

                // Swing animation
                animation:
                  "swing 2.5s ease-in-out infinite",

                // Rotate from bottom
                transformOrigin:
                  "bottom center",

                // Animation keyframes
                "@keyframes swing": {

                  // Left swing
                  "0%": {
                    transform: "rotate(-4deg)",
                  },

                  // Right swing
                  "50%": {
                    transform: "rotate(4deg)",
                  },

                  // Back left
                  "100%": {
                    transform: "rotate(-4deg)",
                  },
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

            {/* Goal amount text */}
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

      {/* Cards row */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          gap: 2,
          overflowX: "auto",
          px: 2,
          pb: 2,

          // Hide scrollbar
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >

        {/* Add new card */}
        <Box
          sx={{
            minWidth: 260,
            height: 150,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow:
              "0px 4px 12px rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >

          {/* Add button */}
          <Button
            onClick={() => navigate("/goal")}
            sx={{
              width: 48,
              height: 48,
              minWidth: 48,
              borderRadius: "50%",
              bgcolor: "#FFF8CC",
              color: "#004D40",
            }}
          >
            <AddIcon sx={{ fontSize: 34 }} />
          </Button>

          {/* Card text */}
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 700,
              color: "#004D40",
            }}
          >
            Add New Card
          </Typography>
        </Box>
      </Box>

      {/* Bottom navigation */}
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

        {/* Home button */}
        <Box
          onClick={() => navigate("/main")}
          sx={{ textAlign: "center" }}
        >
          <HomeIcon sx={{ color: "#004D40" }} />

          <Typography
            sx={{
              fontSize: 12,
              color: "#004D40",
            }}
          >
            Home
          </Typography>
        </Box>

        {/* Expense button */}
        <Box
          onClick={() => navigate("/expense")}
          sx={{ textAlign: "center" }}
        >
          <BarChartIcon sx={{ color: "#004D40" }} />

          <Typography
            sx={{
              fontSize: 12,
              color: "#004D40",
            }}
          >
            Expense
          </Typography>
        </Box>

        {/* Middle add button */}
        <Box
          onClick={() => navigate("/goal")}
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
          }}
        >
          <AddIcon
            sx={{
              fontSize: 38,
              color: "#004D40",
            }}
          />
        </Box>

        {/* Goal button */}
        <Box
          onClick={() => navigate("/goal")}
          sx={{ textAlign: "center" }}
        >
          <EmojiEventsIcon
            sx={{ color: "#004D40" }}
          />

          <Typography
            sx={{
              fontSize: 12,
              color: "#004D40",
            }}
          >
            Goal
          </Typography>
        </Box>

        {/* Profile button */}
        <Box
          onClick={() => navigate("/profile")}
          sx={{ textAlign: "center" }}
        >
          <PersonIcon
            sx={{ color: "#004D40" }}
          />

          <Typography
            sx={{
              fontSize: 12,
              color: "#004D40",
            }}
          >
            Profile
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}