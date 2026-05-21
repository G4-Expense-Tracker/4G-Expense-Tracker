import { useEffect, useState } from "react";
import { Box, Typography, IconButton, LinearProgress } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import FooterNav from "../../Footer/FooterNav.jsx";

import seed1 from "../dashboard/plants/seed1.png";
import phase1 from "../dashboard/plants/phase1.png";
import phase2 from "../dashboard/plants/phase2.png";
import phase3 from "../dashboard/plants/phase3.png";
import phase4 from "../dashboard/plants/phase4.png";

import { getAllGoals } from "../../../api/goals.js";
import { getAllExpenses } from "../../../api/expenses.js";
import { viewBudget } from "../../../api/budgets.js";

function getPlantImage(level) {
  if (level <= 0) return seed1;
  if (level === 1) return phase1;
  if (level === 2) return phase2;
  if (level === 3) return phase3;
  return phase4;
}

function CircularGoalProgress({ percent }) {
  const size = 240;
  const center = size / 2;
  const radius = 100;
  const stroke = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="#FFD84D"
        strokeWidth={stroke}
        fill="#FFFBD8"
      />

      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="#005242"
        strokeWidth={stroke}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${center} ${center})`}
      />
    </svg>
  );
}

function InsightCard({ title }) {
  const changes = [
    { name: "Food", value: "+12%", type: "up" },
    { name: "Transport", value: "-8%", type: "down" },
    { name: "Shopping", value: "+5%", type: "up" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#DDF2C4",
        borderRadius: "14px",
        p: "22px",
        mb: "24px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.18)",
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: 800, color: "#005242" }}>
        {title}
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: 800, color: "#005242", mb: 2 }}>
        Top 3 changes
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {changes.map((item) => (
          <Box key={item.name} sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#005242" }}>
              {item.name}
            </Typography>

            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: item.type === "up" ? "#FFCF24" : "#289173",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                my: 1,
              }}
            >
              {item.type === "up" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            </Box>

            <Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#005242" }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function BudgetOverviewModal({ subtitle, period, spent, description, items, onClose }) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.35)",
        zIndex: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 390,
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "#FFFDF8",
          borderRadius: "34px",
          p: "24px",
          position: "relative",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "#F4F4F4",
            width: 54,
            height: 54,
          }}
        >
          <CloseIcon sx={{ fontSize: 36, color: "#111" }} />
        </IconButton>

        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#252642",
            mt: "58px",
            mb: "12px",
            textAlign: "center",
          }}
        >
          CANOPY
          <br />
          BUDGETING
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 800,
            color: "#252642",
            textAlign: "center",
            mb: "24px",
          }}
        >
          {subtitle}
        </Typography>

        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "28px",
            p: "20px",
            boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: 900, color: "#005242", mb: 3 }}>
            {period}
          </Typography>

          <Typography sx={{ fontSize: "34px", fontWeight: 900, color: "#005242" }}>
            {spent}
          </Typography>

          <Typography sx={{ color: "#888", fontSize: "16px", mb: 3 }}>
            {description}
          </Typography>

          {items.map((item) => (
            <Box
              key={item.name}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                p: 2,
                mb: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
              }}
            >
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    flexShrink: 0,
                  }}
                />

                <Box>
                  <Typography sx={{ fontSize: "18px", fontWeight: 900, color: "#005242" }}>
                    {item.name}
                  </Typography>

                  <Typography sx={{ color: "#888", fontSize: "14px" }}>
                    {item.budgetLabel}
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ mt: 2, fontSize: "16px", fontWeight: 800, color: "#005242" }}>
                Spent: {item.spent}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={item.progress}
                sx={{
                  height: 8,
                  borderRadius: 10,
                  mt: 1,
                  backgroundColor: "#E6F5EE",
                  "& .MuiLinearProgress-bar": { backgroundColor: "#45D495" },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function DashboardPage() {
  const sampleGoals = [
    { id: 1, title: "Tuition", saved: 0, target: 1000, level: 1 },
    { id: 2, title: "Nike Shoe", saved: 50, target: 130, level: 2 },
    { id: 3, title: "Airpods", saved: 150, target: 250, level: 3 },
    { id: 4, title: "Korea", saved: 1500, target: 1800, level: 4 },
  ];

  const [goals, setGoals] = useState([]);
  const [goalIndex, setGoalIndex] = useState(0);
  const [goalsLoading, setGoalsLoading] = useState(true);

  const [dailyBudget, setDailyBudget] = useState(null);
  const [monthlyBudget, setMonthlyBudget] = useState(null);

  const [openCardMenu, setOpenCardMenu] = useState(null);
  const [dailyBudgetOpen, setDailyBudgetOpen] = useState(false);
  const [monthlyBudgetOpen, setMonthlyBudgetOpen] = useState(false);
  const [addCardOpen, setAddCardOpen] = useState(false);

  useEffect(() => {
    async function loadGoals() {
      try {
        setGoalsLoading(true);

        const data = await getAllGoals();

        const formattedData = data.map((goal) => ({
          id: goal.id,
          title: goal.name,
          saved: Number(goal.progress ?? 0),
          target: Number(goal.targetAmount ?? 1),
          level: Number(goal.level ?? 1),
        }));

        setGoals(formattedData);
        setGoalIndex(0);
      } catch (err) {
        console.error("Failed to load goals:", err);
        setGoals([]);
      } finally {
        setGoalsLoading(false);
      }
    }

    loadGoals();
  }, []);

  const activeGoal = goals[goalIndex] || sampleGoals[goalIndex];

  const progressPercent = Math.min(
    100,
    Math.round((activeGoal.saved / activeGoal.target) * 100)
  );

  const dashboardCards = [
    {
      id: "daily",
      title: "Daily Budget",
      amount: "$50",
      used: "$45",
      remaining: "$5",
      progress: 85,
    },
    {
      id: "monthly",
      title: "Monthly Budget",
      amount: "$500",
      used: "$320",
      remaining: "$180",
      progress: 64,
    },
    {
      id: "recent",
      title: "Recent Expense",
      amount: "$9.50",
      used: "Starbucks",
      remaining: "Drink",
      progress: 40,
    },
  ];

  const dailyOverviewItems = [
    { name: "Food & Drink", budgetLabel: "Daily: $20", spent: "$15", progress: 75, color: "#FFD057" },
    { name: "Transportation", budgetLabel: "Daily: $10", spent: "$5", progress: 50, color: "#5AA9FF" },
    { name: "Shopping", budgetLabel: "Daily: $20", spent: "$25", progress: 100, color: "#FF9A57" },
  ];

  const monthlyOverviewItems = [
    { name: "Food & Drink", budgetLabel: "Monthly: $1000", spent: "$500", progress: 50, color: "#FFD057" },
    { name: "Transportation", budgetLabel: "Monthly: $600", spent: "$300", progress: 50, color: "#5AA9FF" },
    { name: "Housing", budgetLabel: "Monthly: $800", spent: "$650", progress: 80, color: "#FF9A57" },
  ];

  const handlePrevGoal = () => {
    setGoalIndex((prev) => (prev === 0 ? goals.length - 1 : prev - 1));
  };

  const handleNextGoal = () => {
    setGoalIndex((prev) => (prev === goals.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (card) => {
    if (card.id === "daily") setDailyBudgetOpen(true);
    if (card.id === "monthly") setMonthlyBudgetOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FAFCF7",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
          px: "20px",
          pt: "22px",
          pb: "120px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: "24px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>9:41</Typography>

          <Box sx={{ display: "flex", gap: 0.5, color: "#253527" }}>
            <SignalCellular4BarIcon />
            <WifiIcon />
            <BatteryFullIcon />
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "serif",
            mb: "18px",
          }}
        >
          Good Morning, Hye
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: 260,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "18px",
          }}
        >
          <IconButton
            onClick={handlePrevGoal}
            sx={{ position: "absolute", left: 0, color: "#289173", zIndex: 5 }}
          >
            <KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              width: 240,
              height: 240,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularGoalProgress percent={progressPercent} />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "#005242",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "17px",
                fontWeight: 800,
                zIndex: 3,
              }}
            >
              {progressPercent}%
            </Box>

            <Box
              sx={{
                position: "absolute",
                textAlign: "center",
                top: 42,
                left: 0,
                right: 0,
              }}
            >
              <Box
                component="img"
                key={activeGoal.id}
                src={getPlantImage(activeGoal.level)}
                alt={activeGoal.title}
                sx={{
                  width: 88,
                  height: 88,
                  objectFit: "contain",
                  mb: 0.5,
                  transformOrigin: "bottom center",
                  animation: "plantSwing 1.8s ease-in-out infinite",
                  "@keyframes plantSwing": {
                    "0%": { transform: "rotate(-4deg) translateX(-2px)" },
                    "50%": { transform: "rotate(4deg) translateX(2px)" },
                    "100%": { transform: "rotate(-4deg) translateX(-2px)" },
                  },
                }}
              />

              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "#005242",
                  lineHeight: 1,
                  mt: 1,
                }}
              >
                {activeGoal.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#005242",
                  mt: 0.3,
                }}
              >
                ${activeGoal.saved} / {activeGoal.target}
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={handleNextGoal}
            sx={{ position: "absolute", right: 0, color: "#289173", zIndex: 5 }}
          >
            <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: "26px" }}>
          {goals.map((goal, index) => (
            <Box
              key={goal.id}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: index === goalIndex ? "#289173" : "#A7BF75",
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: "16px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: 800, color: "#005242" }}>
            Dashboard
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            mb: "28px",
            pb: 1,
            mx: "-20px",
            px: "20px",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {dashboardCards.map((card) => (
            <Box
              key={card.id}
              onClick={() => handleCardClick(card)}
              sx={{
                minWidth: 310,
                backgroundColor: "#DDF2C4",
                borderRadius: "14px",
                p: "18px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                cursor: card.id === "daily" || card.id === "monthly" ? "pointer" : "default",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: 800, color: "#005242" }}>
                  {card.title}
                </Typography>

                <IconButton
                  size="small"
                  onClick={(event) => {
                    event.stopPropagation();
                    setOpenCardMenu(openCardMenu === card.id ? null : card.id);
                  }}
                >
                  <MoreHorizIcon sx={{ color: "#289173" }} />
                </IconButton>
              </Box>

              {openCardMenu === card.id && (
                <Box
                  onClick={(event) => event.stopPropagation()}
                  sx={{
                    position: "absolute",
                    top: 52,
                    right: 16,
                    backgroundColor: "#FAFCF7",
                    border: "1px solid #1C9A72",
                    borderRadius: "12px",
                    overflow: "hidden",
                    zIndex: 10,
                    boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1.2, color: "#005242" }}>
                    <EditIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontWeight: 700 }}>Edit</Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1.2, color: "#005242" }}>
                    <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontWeight: 700 }}>Delete</Typography>
                  </Box>
                </Box>
              )}

              <Typography sx={{ fontSize: "38px", fontWeight: 800, color: "#000", mb: 1 }}>
                {card.amount}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={card.progress}
                sx={{
                  height: 13,
                  borderRadius: 10,
                  backgroundColor: "#FFF7D7",
                  "& .MuiLinearProgress-bar": { backgroundColor: "#005242" },
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: 12, fontWeight: 700 }}>Used</Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 800, color: "#005242" }}>
                    {card.used}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: 12, fontWeight: 700 }}>Remaining</Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 800, color: "#005242" }}>
                    {card.remaining}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}

          <Box
            onClick={() => setAddCardOpen(true)}
            sx={{
              minWidth: 310,
              height: 190,
              backgroundColor: "#DDF2C4",
              borderRadius: "14px",
              p: "18px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "#FFFBD8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "44px",
                color: "#005242",
                fontWeight: 800,
              }}
            >
              +
            </Box>

            <Typography sx={{ fontSize: "28px", fontWeight: 800, color: "#005242" }}>
              Add New Card
            </Typography>
          </Box>
        </Box>

        {dailyBudgetOpen && (
          <BudgetOverviewModal
            subtitle="DAILY SPENDING OVERVIEW"
            period="Today"
            spent="$45"
            description="Spent from $50 daily budget"
            items={dailyOverviewItems}
            onClose={() => setDailyBudgetOpen(false)}
          />
        )}

        {monthlyBudgetOpen && (
          <BudgetOverviewModal
            subtitle="MONTHLY SPENDING OVERVIEW"
            period="This Month"
            spent="$320"
            description="Spent from $500 monthly budget"
            items={monthlyOverviewItems}
            onClose={() => setMonthlyBudgetOpen(false)}
          />
        )}

        {addCardOpen && (
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.35)",
              zIndex: 130,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 390,
                maxHeight: "88vh",
                overflowY: "auto",
                borderRadius: "34px",
                background: "linear-gradient(180deg, #289173 0%, #A7BF75 100%)",
                p: "24px",
                position: "relative",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              <Box
                sx={{
                  width: 190,
                  height: 7,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  mx: "auto",
                  mb: 4,
                }}
              />

              <IconButton
                onClick={() => setAddCardOpen(false)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "#F4F4F4",
                  width: 50,
                  height: 50,
                }}
              >
                <CloseIcon sx={{ fontSize: 32 }} />
              </IconButton>

              <InsightCard title="Weekly Insight" />
              <InsightCard title="Monthly Insight" />
            </Box>
          </Box>
        )}

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 430,
            zIndex: 20,
          }}
        >
          <FooterNav />
        </Box>
      </Box>
    </Box>
  );
}