// Import useState to change goal slides and update amount
import { useState } from "react";

// Import useNavigate to connect pages
import { useNavigate } from "react-router-dom";

// Import Material UI components
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  LinearProgress,
  TextField,
} from "@mui/material";

// Import Material UI icons
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

// Import plant images
import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

// Main Dashboard page
export default function DashboardPage() {
  // Used for moving to other pages
  const navigate = useNavigate();

  // Keeps track of the current goal shown in the circle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Goal data for the circle
  const [goals, setGoals] = useState([
    {
      title: "Click here",
      subtitle: "to set your goal",
      savedAmount: "",
      targetAmount: "",
    },
    {
      title: "Tuition",
      savedAmount: "",
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

  // Current goal object
  const current = goals[currentIndex];

  // Calculate progress automatically
  const progress =
    current.targetAmount && current.savedAmount !== ""
      ? Math.min((Number(current.savedAmount) / current.targetAmount) * 100, 100)
      : 0;

  // Updates the slider when user types amount
  function handleAmountChange(event) {
    const value = event.target.value;

    setGoals((prevGoals) =>
      prevGoals.map((goal, index) =>
        index === currentIndex
          ? {
              ...goal,
              savedAmount: value === "" ? "" : Number(value),
            }
          : goal
      )
    );
  }

  // Change plant picture based on progress percent
  function getPlantImage() {
    if (progress === 0) return seed1;
    if (progress < 40) return phase1;
    if (progress < 60) return phase2;
    if (progress < 85) return phase3;
    return phase4;
  }

  // Go to the next goal
  function nextGoal() {
    setCurrentIndex((prev) => (prev + 1) % goals.length);
  }

  // Go to the previous goal
  function previousGoal() {
    setCurrentIndex((prev) => (prev === 0 ? goals.length - 1 : prev - 1));
  }

  return (
    // Main phone container
    <Box
      sx={{
        width: 390,
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
        {/* Time */}
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>9:41</Typography>

        {/* Simple phone icons */}
        <Box sx={{ display: "flex", gap: 0.3 }}>
            <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
            <WifiIcon sx={{ fontSize: 14 }} />
            <BatteryFullIcon sx={{ fontSize: 17 }} />
        </Box>
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

      {/* Input only shows when goal has a target */}
      {current.targetAmount && (
        <Box sx={{ px: 4, mt: 3 }}>
          <TextField
            fullWidth
            type="number"
            placeholder="Enter saved amount"
            value={current.savedAmount}
            onChange={handleAmountChange}
            sx={{
              bgcolor: "white",
              borderRadius: 4,
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
              },
            }}
          />
        </Box>
      )}

      {/* Circle progress area */}
      <Box
        sx={{
          mt: 4,
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

          {/* Percent bubble */}
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
                ? `$${current.savedAmount || 0} / ${current.targetAmount}`
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
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Add New Card */}
        <Box
          onClick={() => navigate("/newgoal")}
          sx={{
            minWidth: 330,
            height: 160,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow: "0px 6px 10px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            cursor: "pointer",
            scrollSnapAlign: "center",
          }}
        >
          {/* Plus icon circle */}
          <Box
            sx={{
              width: 62,
              height: 62,
              borderRadius: "50%",
              bgcolor: "#FFF8CC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon sx={{ fontSize: 42, color: "#004D40" }} />
          </Box>

          {/* Add card text */}
          <Typography sx={{ fontSize: 26, fontWeight: 700, color: "#004D40" }}>
            Add New Card
          </Typography>
        </Box>

        {/* Daily Budget Card */}
        <Box
          sx={{
            minWidth: 330,
            height: 160,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow: "0px 6px 10px rgba(0,0,0,0.25)",
            p: 3,
            boxSizing: "border-box",
            scrollSnapAlign: "center",
          }}
        >
          {/* Daily budget title */}
          <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 24 }}>
            Daily Budget
          </Typography>

          {/* Daily budget amount */}
          <Typography sx={{ fontWeight: 800, fontSize: 36 }}>$50</Typography>

          {/* Budget progress bar */}
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{
              mt: 1.5,
              height: 12,
              borderRadius: 10,
              bgcolor: "#FFF8CC",
              "& .MuiLinearProgress-bar": {
                bgcolor: "#004D40",
              },
            }}
          />

          {/* Used and remaining */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1.5 }}>
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>Used</Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#004D40" }}>
                $45
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>Remaining</Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#004D40" }}>
                $5
              </Typography>
            </Box>
          </Box>

          {/* Three dots */}
          <Box sx={{ textAlign: "center", mt: -0.5 }}>
            <Box component="span" sx={{ color: "#004D40", mx: 0.4 }}>
              ●
            </Box>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>
              ●
            </Box>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>
              ●
            </Box>
          </Box>
        </Box>

        {/* Recent Expense Card */}
        <Box
          sx={{
            minWidth: 330,
            height: 160,
            borderRadius: 3,
            bgcolor: "#DFF0BF",
            boxShadow: "0px 6px 10px rgba(0,0,0,0.25)",
            p: 3,
            boxSizing: "border-box",
            scrollSnapAlign: "center",
          }}
        >
          {/* Recent expense title */}
          <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 24 }}>
            Recent Expense
          </Typography>

          {/* Expense row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            {/* Expense left side */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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

              <Typography sx={{ fontSize: 26 }}>Starbucks</Typography>
            </Box>

            {/* Expense amount */}
            <Typography sx={{ fontSize: 26, fontWeight: 700 }}>$6.00</Typography>
          </Box>

          {/* Expense date */}
          <Typography
            sx={{
              mt: 1,
              ml: 6,
              display: "inline-block",
              px: 1.5,
              py: 0.3,
              borderRadius: 5,
              bgcolor: "#FFF8CC",
              fontSize: 14,
            }}
          >
            Sun, April 7&nbsp;&nbsp; | &nbsp;&nbsp;6:00 am
          </Typography>

          {/* Three dots */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>
              ●
            </Box>
            <Box component="span" sx={{ color: "#9AB46B", mx: 0.4 }}>
              ●
            </Box>
            <Box component="span" sx={{ color: "#004D40", mx: 0.4 }}>
              ●
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer navigation */}
      <Box
        sx={{
          width: 390,
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
        {/* Home link */}
        <Box onClick={() => navigate("/main")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <HomeIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Home</Typography>
        </Box>

        {/* Expense link */}
        <Box onClick={() => navigate("/expense")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <BarChartIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Expense</Typography>
        </Box>

        {/* Add new goal link */}
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

        {/* Goal link */}
        <Box onClick={() => navigate("/goals")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <EmojiEventsIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Goal</Typography>
        </Box>

        {/* Profile link */}
        <Box onClick={() => navigate("/account")} sx={{ textAlign: "center", cursor: "pointer" }}>
          <PersonIcon sx={{ color: "#004D40" }} />
          <Typography sx={{ fontSize: 12, color: "#004D40" }}>Profile</Typography>
        </Box>
      </Box>
    </Box>
  );
}