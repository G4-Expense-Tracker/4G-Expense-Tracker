// ===============================
// Expense Weekly Page
// Full MUI + Mobiscroll Version
// ===============================

import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

// ===============================
// MUI Icons
// ===============================

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// ===============================
// Mobiscroll Calendar
// ===============================

import {
  Eventcalendar,
  setOptions,
} from "@mobiscroll/react";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";

// ===============================
// Footer Navigation
// ===============================

import FooterNav from "../../Footer/FooterNav";

// ===============================
// Mobiscroll Theme
// ===============================

setOptions({
  theme: "ios",
  themeVariant: "light",
});

// ===============================
// Component
// ===============================

export default function ExpenseWeekly() {

  // ===============================
  // Expense Data
  // ===============================

  const expenses = [
    {
      time: "6:00am",
      title: "Bus Fare",
      category: "Food",
      amount: "$6.00",
      icon: <DirectionsBusIcon />,
    },
    {
      time: "7:15am",
      title: "Starbucks",
      category: "Drink",
      amount: "$9.50",
      icon: <LocalCafeIcon />,
    },
    {
      time: "3:45am",
      title: "Save on Foods",
      category: "Groceries",
      amount: "$55.50",
      icon: <ShoppingCartIcon />,
    },
    {
      time: "5:35am",
      title: "Yoga",
      category: "Health",
      amount: "$22.50",
      icon: <FitnessCenterIcon />,
    },
  ];

  // ===============================
  // JSX
  // ===============================

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
      {/* Main Phone Container */}
      <Box
        sx={{
          width: 390,
          minHeight: "100vh",
          backgroundColor: "#FAFCF7",
          position: "relative",
          overflow: "hidden",
          pb: "120px",
        }}
      >
        {/* ===============================
            Top Small Title
        =============================== */}
        <Typography
          sx={{
            fontSize: "20px",
            color: "#D8D8D8",
            ml: 2,
            mt: 1,
          }}
        >
          Expense_Weekly
        </Typography>

        {/* ===============================
            Top Tabs
        =============================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 6,
          }}
        >
          {/* Expense Active Tab */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#004B3B",
              }}
            >
              Expense
            </Typography>

            {/* Active Green Line */}
            <Box
              sx={{
                width: 145,
                height: 6,
                borderRadius: "10px",
                backgroundColor: "#A7C26E",
                mt: 2,
              }}
            />
          </Box>

          {/* Insight Tab */}
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#A7C26E",
            }}
          >
            Insight
          </Typography>
        </Box>

        {/* ===============================
            Weekly Dropdown Text
        =============================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 4,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#163D2B",
            }}
          >
            Weekly
          </Typography>

          <KeyboardArrowRightIcon
            sx={{
              color: "#163D2B",
            }}
          />
        </Box>

        {/* ===============================
            Mobiscroll Weekly Calendar
        =============================== */}
        <Box
          sx={{
            mx: 3,
            border: "1.5px solid #1C9A72",
            borderRadius: "14px",
            overflow: "hidden",
            backgroundColor: "#FAFCF7",
            mb: 4,

            // Mobiscroll Main Background
            "& .mbsc-calendar": {
              backgroundColor: "#FAFCF7",
            },

            // Month Title
            "& .mbsc-calendar-title": {
              color: "#005242",
              fontWeight: 700,
              fontSize: "22px",
            },

            // Weekday Names
            "& .mbsc-calendar-week-day": {
              color: "#005242",
              fontSize: "16px",
              fontWeight: 500,
            },

            // Day Numbers
            "& .mbsc-calendar-cell-text": {
              color: "#005242",
              fontSize: "18px",
            },

            // Selected Day
            "& .mbsc-selected .mbsc-calendar-cell-text": {
              backgroundColor: "#005242",
              color: "#FFFFFF",
              fontWeight: 700,
            },

            // Remove Borders
            "& .mbsc-calendar-cell": {
              border: "none",
            },

            // Arrows
            "& .mbsc-calendar-button": {
              color: "#1C9A72",
            },
          }}
        >
          <Eventcalendar
            height="auto"
            selectedDate={new Date(2026, 3, 7)}
            view={{
              calendar: {
                type: "week",
              },
            }}
          />
        </Box>

        {/* ===============================
            Total Section
        =============================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
            mx: 3,
            mb: 3,
          }}
        >
          {/* Total Pill */}
          <Box
            sx={{
              border: "1.5px solid #1C9A72",
              borderRadius: "40px",
              px: 2.5,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: "#222",
              }}
            >
              Total
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#005242",
              }}
            >
              $115.25
            </Typography>
          </Box>

          {/* Filter Icon */}
          <FilterAltOutlinedIcon
            sx={{
              color: "#005242",
              fontSize: 38,
            }}
          />
        </Box>

        {/* ===============================
            Expense Cards
        =============================== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            px: 3,
          }}
        >
          {expenses.map((expense, index) => (
            <Box
              key={index}
              sx={{
                border: "1.5px solid #1C9A72",
                borderRadius: "14px",
                px: 2,
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Left Side */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    color: "#005242",

                    "& svg": {
                      fontSize: 36,
                    },
                  }}
                >
                  {expense.icon}
                </Box>

                {/* Text */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#005242",
                    }}
                  >
                    {expense.time}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#005242",
                      lineHeight: 1.1,
                    }}
                  >
                    {expense.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#005242",
                    }}
                  >
                    {expense.category}
                  </Typography>
                </Box>
              </Box>

              {/* Right Side */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {/* Amount */}
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#005242",
                  }}
                >
                  {expense.amount}
                </Typography>

                {/* 3 Dots */}
                <IconButton>
                  <MoreHorizIcon
                    sx={{
                      color: "#1C9A72",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ===============================
            Footer Navigation
        =============================== */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: 390,
            zIndex: 1000,
          }}
        >
          <FooterNav />
        </Box>
      </Box>
    </Box>
  );
}