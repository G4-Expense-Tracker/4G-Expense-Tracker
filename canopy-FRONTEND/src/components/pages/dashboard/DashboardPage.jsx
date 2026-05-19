import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  LinearProgress,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import FooterNav from "../../Footer/FooterNav";

import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

import { getUserSession } from "../../../api/users";

export default function DashboardPage() {
  const navigate = useNavigate();

  const [goals, setGoals] = useState([]);
  const [dashboardCards, setDashboardCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    const savedBudgets = JSON.parse(localStorage.getItem("budgets")) || {};
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    setGoals(savedGoals);
    setDashboardCards(
      createDashboardCards(savedBudgets, savedExpenses, savedGoals)
    );

    async function getUser() {
      try {
        const sessionData = await getUserSession();
        setUser(sessionData.user);
      } catch (err) {
        console.error("Failed to fetch user session:", err);
      } finally {
        setLoadingUser(false);
      }
    }

    getUser();
  }, []);

  const currentGoal = goals[currentIndex];

  // Automatically calculates circular progress
  const progress = currentGoal
    ? Math.min(
        Math.round(
          (Number(currentGoal.savedAmount || 0) /
            Number(currentGoal.targetAmount || 1)) *
            100
        ),
        100
      )
    : 0;

  function nextGoal() {
    if (goals.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % goals.length);
  }

  function previousGoal() {
    if (goals.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? goals.length - 1 : prev - 1));
  }

  function handleGoalClick() {
    if (currentGoal) {
      navigate(`/goal/${currentGoal.id}`);
    } else {
      navigate("/newgoal");
    }
  }

  function handleCardScroll(event) {
    const cardWidth = 286;
    setCardIndex(Math.round(event.target.scrollLeft / cardWidth));
  }

  function getPlantImage() {
    if (!currentGoal || progress === 0) return seed1;
    if (progress < 40) return phase1;
    if (progress < 60) return phase2;
    if (progress < 85) return phase3;
    return phase4;
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
        pb: 13,
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
        {loadingUser ? "Good Morning..." : `Good Morning, ${user.first_name}`}
      </Typography>

      {/* Goal preview circle */}
      <Box
        sx={{
          mt: 7,
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
            left: 12,
            color: "#168C6C",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          onClick={handleGoalClick}
          sx={{
            position: "relative",
            width: 260,
            height: 260,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
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

          {/* Green automatic progress circle */}
          {currentGoal && (
            <CircularProgress
              variant="determinate"
              value={progress}
              size={235}
              thickness={4.5}
              sx={{
                color: "#004D40",
                position: "absolute",
                transform: "rotate(-90deg)",
                transition: "all 0.5s ease",
              }}
            />
          )}

          {/* Percent bubble */}
          {currentGoal && (
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
              {progress}%
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
            <Box
              component="img"
              src={getPlantImage()}
              alt="goal plant"
              sx={{
                width: 95,
                height: 95,
                objectFit: "contain",
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
              {currentGoal ? currentGoal.title : "Click here"}
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "#004D40",
              }}
            >
              {currentGoal
                ? `$${currentGoal.savedAmount || 0} / ${
                    currentGoal.targetAmount || 0
                  }`
                : "to set your goal"}
            </Typography>
          </Box>
        </Box>

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

      {/* Bottom cards */}
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
        {dashboardCards.length > 0 ? (
          dashboardCards.map((card) => (
            <DashboardCard key={card.id} card={card} />
          ))
        ) : (
          <Box
            sx={{
              minWidth: 270,
              height: 160,
              borderRadius: 3,
              bgcolor: "#DFF0BF",
              boxShadow: "0px 6px 10px rgba(0,0,0,0.25)",
              p: 3,
              boxSizing: "border-box",
              scrollSnapAlign: "center",
            }}
          >
            <Typography sx={{ color: "#004D40", fontWeight: 700, fontSize: 22 }}>
              No saved values yet
            </Typography>

            <Typography sx={{ mt: 2, color: "#004D40", fontSize: 15 }}>
              Add a goal, budget, or expense to see dashboard previews.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Dots */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 1,
        }}
      >
        {dashboardCards.map((card, index) => (
          <Box
            key={card.id}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: cardIndex === index ? "#004D40" : "#9AB46B",
            }}
          />
        ))}
      </Box>

      <FooterNav />
    </Box>
  );
}

function DashboardCard({ card }) {
  const progress =
    card.amount > 0 ? Math.min((card.used / card.amount) * 100, 100) : 0;

  return (
    <Box
      sx={{
        minWidth: 270,
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
        {card.title}
      </Typography>

      <Typography sx={{ fontWeight: 800, fontSize: 36, color: "#004D40" }}>
        ${card.amount}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
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
          <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
            {card.leftLabel || "Used"}
          </Typography>

          <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#004D40" }}>
            ${card.used}
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
            {card.rightLabel || "Remaining"}
          </Typography>

          <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#004D40" }}>
            ${card.remaining}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function createDashboardCards(budgets, expenses, goals) {
  const cards = [];

  const totalExpenses = expenses.reduce((total, expense) => {
    return total + Number(expense.amount || 0);
  }, 0);

  if (budgets.dailyBudget) {
    const dailyBudget = Number(budgets.dailyBudget);

    cards.push({
      id: "daily-budget",
      title: "Daily Budget",
      amount: dailyBudget,
      used: totalExpenses,
      remaining: Math.max(dailyBudget - totalExpenses, 0),
    });
  }

  if (budgets.monthlyBudget) {
    const monthlyBudget = Number(budgets.monthlyBudget);

    cards.push({
      id: "monthly-budget",
      title: "Monthly Budget",
      amount: monthlyBudget,
      used: totalExpenses,
      remaining: Math.max(monthlyBudget - totalExpenses, 0),
    });
  }

  if (expenses.length > 0) {
    const recentExpense = expenses[expenses.length - 1];

    cards.push({
      id: "recent-expense",
      title: "Recent Expense",
      amount: Number(recentExpense.amount || 0),
      used: Number(recentExpense.amount || 0),
      remaining: 0,
      leftLabel: "Amount",
      rightLabel: "Latest",
    });
  }

  if (goals.length > 0) {
    const firstGoal = goals[0];

    cards.push({
      id: "goal-progress",
      title: "Goal Progress",
      amount: Number(firstGoal.targetAmount || 0),
      used: Number(firstGoal.savedAmount || 0),
      remaining: Math.max(
        Number(firstGoal.targetAmount || 0) -
          Number(firstGoal.savedAmount || 0),
        0
      ),
    });
  }

  return cards;
}