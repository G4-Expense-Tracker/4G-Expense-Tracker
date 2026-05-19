import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, IconButton } from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
  Eventcalendar,
  CalendarPrev,
  CalendarNext,
  setOptions,
} from "@mobiscroll/react";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import FooterNav from "../../Footer/FooterNav.jsx";
import ExpenseHeader from "../../headers/ExpenseHeader.jsx";

import { getAllExpenses } from "../../../api/expenses";

setOptions({
  theme: "ios",
  themeVariant: "light",
  firstDay: 1,
});

export default function ExpensePage() {
  const navigate = useNavigate();

  const [calendarMode, setCalendarMode] = useState("week");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 3, 7));
  const [savedExpenses, setSavedExpenses] = useState([]);

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await getAllExpenses();
        setSavedExpenses(data || []);
      } catch (err) {
        console.error(err);
        setSavedExpenses([]);
      }
    }

    loadExpenses();
  }, []);

  const sampleExpenses = [
    {
      id: "sample-1",
      date: "2026-04-07",
      time: "6:00am",
      title: "Bus Fare",
      category: "Food",
      amount: "$6.00",
      iconType: "bus",
    },
    {
      id: "sample-2",
      date: "2026-04-07",
      time: "7:15am",
      title: "Starbucks",
      category: "Drink",
      amount: "$9.50",
      iconType: "drink",
    },
    {
      id: "sample-3",
      date: "2026-04-07",
      time: "3:45am",
      title: "Save on Foods",
      category: "Groceries",
      amount: "$55.50",
      iconType: "groceries",
    },
    {
      id: "sample-4",
      date: "2026-04-06",
      time: "3:45am",
      title: "Save on Foods",
      category: "Groceries",
      amount: "$55.50",
      iconType: "groceries",
    },
    {
      id: "sample-5",
      date: "2026-04-05",
      time: "5:35am",
      title: "Yoga",
      category: "Health",
      amount: "$22.50",
      iconType: "health",
    },
  ];

  const allExpenses = [...sampleExpenses];

  const formatDate = (date) => date.toISOString().split("T")[0];

  const selectedDateString = formatDate(selectedDate);

  const filteredExpenses = allExpenses.filter(
    (expense) => expense.date === selectedDateString
  );

  const totalAmount = filteredExpenses.reduce((total, expense) => {
    return total + Number(String(expense.amount).replace("$", ""));
  }, 0);

  const getExpenseIcon = (expense) => {
    const iconType = expense.iconType || expense.category?.toLowerCase();

    if (iconType?.includes("bus")) return <DirectionsBusIcon />;
    if (iconType?.includes("drink")) return <LocalCafeIcon />;
    if (iconType?.includes("food")) return <LocalCafeIcon />;
    if (iconType?.includes("grocery")) return <ShoppingCartIcon />;
    if (iconType?.includes("health")) return <FitnessCenterIcon />;

    return <ShoppingCartIcon />;
  };

  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = savedExpenses.filter(
      (expense) => String(expense.id) !== String(expenseId)
    );

    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setSavedExpenses(updatedExpenses);
    setOpenMenuIndex(null);
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
          backgroundColor: "#FAFCF7",
          position: "relative",
          overflowX: "hidden",
          px: { xs: "18px", sm: "24px" },
          pt: "24px",
          pb: "120px",
        }}
      >
        {/* Status Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "40px",
            px: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#3D3D3D",
            }}
          >
            9:41
          </Typography>

          <Box sx={{ display: "flex", gap: 0.5, color: "#3D3D3D" }}>
            <SignalCellular4BarIcon sx={{ fontSize: 20 }} />
            <WifiIcon sx={{ fontSize: 20 }} />
            <BatteryFullIcon sx={{ fontSize: 23 }} />
          </Box>
        </Box>

      <ExpenseHeader/>

        {/* Weekly / Monthly Toggle */}
        <Box
          onClick={() =>
            setCalendarMode((prev) => (prev === "week" ? "month" : "week"))
          }
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            mb: "14px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#163D2B",
            }}
          >
            {calendarMode === "week" ? "Weekly" : "Monthly"}
          </Typography>

          <KeyboardArrowRightIcon sx={{ fontSize: 24, color: "#163D2B" }} />
        </Box>

        {/* Calendar */}
        <Box
          sx={{
            border: "1px solid #1C9A72",
            borderRadius: "7px",
            overflow: "hidden",
            mb: "14px",
            backgroundColor: "#FAFCF7",

            // React Calender Mobiscroll Referenced from
            // https://demo.mobiscroll.com/react/eventcalendar/event-data-structure
            "& .mbsc-calendar": {
              backgroundColor: "#FAFCF7",
            },

            "& .mbsc-calendar-wrapper": {
              backgroundColor: "#FAFCF7",
            },

            "& .mbsc-calendar-week-day": {
              color: "#005242",
              fontSize: "15px",
              fontWeight: 500,
            },

            "& .mbsc-calendar-cell-text": {
              color: "#005242",
              fontSize: "18px",
              width: "30px",
              height: "30px",
              lineHeight: "30px",
            },

            "& .mbsc-selected .mbsc-calendar-cell-text": {
              backgroundColor: "#005242",
              color: "#FFFFFF",
              borderRadius: "50%",
              fontWeight: 700,
            },

            "& .mbsc-button": {
              color: "#1C9A72",
            },

            "& .mbsc-calendar-cell": {
              border: "none",
            },
          }}
        >
          <Eventcalendar
            selectedDate={selectedDate}
            onSelectedDateChange={(event) => {
              setSelectedDate(event.date);
              setOpenMenuIndex(null);
            }}
            height={calendarMode === "week" ? 150 : 330}
            view={{
              calendar: {
                type: calendarMode,
              },
            }}
            renderHeader={() => (
              <Box
                sx={{
                  height: 42,
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 40px",
                  alignItems: "center",
                  backgroundColor: "#FAFCF7",
                  px: 1,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CalendarPrev />
                </Box>

                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 700,
                    color: "#005242",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {selectedDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CalendarNext />
                </Box>
              </Box>
            )}
          />
        </Box>

        {/* Total */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
            mb: "18px",
          }}
        >
          <Box
            sx={{
              border: "1px solid #1C9A72",
              borderRadius: "30px",
              px: 1.5,
              py: 0.6,
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Total</Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#005242",
              }}
            >
              ${totalAmount.toFixed(2)}
            </Typography>
          </Box>

          <FilterAltOutlinedIcon sx={{ color: "#005242", fontSize: 32 }} />
        </Box>

        {/* Expense Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <Box
                key={expense.id}
                sx={{
                  minHeight: 86,
                  border: "1px solid #1C9A72",
                  borderRadius: "7px",
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#FAFCF7",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    minWidth: 0,
                  }}
                >
                  <Box sx={{ color: "#005242", "& svg": { fontSize: 32 } }}>
                    {getExpenseIcon(expense)}
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontSize: "13px", color: "#005242" }}>
                      {expense.time}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#005242",
                        lineHeight: 1.1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: { xs: 130, sm: 160 },
                      }}
                    >
                      {expense.title}
                    </Typography>

                    <Typography sx={{ fontSize: "14px", color: "#005242" }}>
                      {expense.category}
                    </Typography>
                  </Box>
                </Box>

                {openMenuIndex === index ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      onClick={() => navigate(`/edit-expense/${expense.id}`)}
                      sx={{
                        textAlign: "center",
                        color: "#005242",
                        cursor: "pointer",
                      }}
                    >
                      <EditIcon sx={{ fontSize: 24 }} />
                      <Typography sx={{ fontSize: "13px" }}>Edit</Typography>
                    </Box>

                    <Box
                      sx={{
                        width: "1px",
                        height: 45,
                        backgroundColor: "#B8B8B8",
                      }}
                    />

                    <Box
                      onClick={() => handleDeleteExpense(expense.id)}
                      sx={{
                        textAlign: "center",
                        color: "#005242",
                        cursor: "pointer",
                      }}
                    >
                      <DeleteOutlineOutlinedIcon sx={{ fontSize: 26 }} />
                      <Typography sx={{ fontSize: "13px" }}>Delete</Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#005242",
                      }}
                    >
                      {expense.amount}
                    </Typography>

                    <IconButton
                      size="small"
                      onClick={() =>
                        setOpenMenuIndex(openMenuIndex === index ? null : index)
                      }
                    >
                      <MoreHorizIcon sx={{ fontSize: 20, color: "#1C9A72" }} />
                    </IconButton>
                  </Box>
                )}
              </Box>
            ))
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                color: "#005242",
                fontSize: "18px",
                mt: 4,
              }}
            >
              No expenses for this date.
            </Typography>
          )}
        </Box>

        {/* Footer */}
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