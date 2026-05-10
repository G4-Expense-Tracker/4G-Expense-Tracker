// React useState reference:
// https://react.dev/reference/react/useState
import { useState } from "react";

// React Router useNavigate reference:
// https://reactrouter.com/api/hooks/useNavigate
import { useNavigate } from "react-router-dom";

// MUI components reference:
// https://mui.com/material-ui/getting-started/
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  LinearProgress,
  TextField,
} from "@mui/material";

// MUI icons reference:
// https://mui.com/material-ui/material-icons/
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

// Plant images (From BCIT Design Team (Jennie, David, Alice, Hye and Gurjot))
import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

export default function DashboardPage() {
  // This lets the footer buttons go to other pages
  const navigate = useNavigate();

  // This changes the circular goal card
  const [currentIndex, setCurrentIndex] = useState(0);

  // This changes the active dot under the bottom cards
  const [cardIndex, setCardIndex] = useState(0);

  // Goal data for the circular progress
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

  // Current goal that is showing
  const current = goals[currentIndex];

  // MUI CircularProgress reference:
  // https://mui.com/material-ui/react-progress/
  // This calculates the slider percentage automatically
  const progress =
    current.targetAmount && current.savedAmount !== ""
      ? Math.min((Number(current.savedAmount) / current.targetAmount) * 100, 100)
      : 0;

  // MUI TextField reference:
  // https://mui.com/material-ui/react-text-field/
  // Slider from the input box, only shows if the goal has a target amount and referenced from: https://www.npmjs.com/package/@fseehawer/react-circular-slider
  // This updates the slider when the user types a saved amount
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

  // This changes the plant image based on the progress
  function getPlantImage() {
    if (progress === 0) return seed1;
    if (progress < 40) return phase1;
    if (progress < 60) return phase2;
    if (progress < 85) return phase3;
    return phase4;
  }

  // This moves to the next circular goal
  function nextGoal() {
    setCurrentIndex((prev) => (prev + 1) % goals.length);
  }

  // This moves to the previous circular goal
  function previousGoal() {
    setCurrentIndex((prev) => (prev === 0 ? goals.length - 1 : prev - 1));
  }

  // This updates the dots when the user scrolls the bottom cards
  function handleCardScroll(event) {
    const scrollLeft = event.target.scrollLeft;
    const cardWidth = 346;
    const newIndex = Math.round(scrollLeft / cardWidth);

    setCardIndex(newIndex);
  }

  return (
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
      {/* Status bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
          mb: 2,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>

      {/* Greeting */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 4,
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          color: "#004D40",
        }}
      >
        Good Morning, Hye
      </Typography>

      {/* Input box only shows for goals that have target amount */}
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

      {/* Circular goal progress */}
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

          {/* Inner circle content */}
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
            {/* Animated plant */}
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

            {/* Goal amount */}
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

      {/* Bottom cards row */}
      <Box
        onScroll={handleCardScroll}
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
          <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 24 }}>
            Daily Budget
          </Typography>

          <Typography sx={{ fontWeight: 800, fontSize: 36 }}>$50</Typography>

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

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1.5 }}>
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>Used</Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#004D40" }}>
                $45
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                Remaining
              </Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#004D40" }}>
                $5
              </Typography>
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
          <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 24 }}>
            Recent Expense
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
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

            <Typography sx={{ fontSize: 26, fontWeight: 700 }}>$6.00</Typography>
          </Box>

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
        </Box>
      </Box>

      {/* Three dots under cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mt: 1,
        }}
      >
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: cardIndex === dot ? "#004D40" : "#9AB46B",
            }}
          />
        ))}
      </Box>

      {/* Footer navigation links from App.jsx routes */}
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