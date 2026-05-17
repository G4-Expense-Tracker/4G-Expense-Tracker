import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, IconButton, Button } from "@mui/material";

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

import { getAllExpenses, deleteExpense } from "../../../api/expenses.js";

import {
  Eventcalendar,
  CalendarPrev,
  CalendarNext,
  setOptions,
} from "@mobiscroll/react";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import FooterNav from "../../Footer/FooterNav.jsx";

setOptions({
  theme: "ios",
  themeVariant: "light",
  firstDay: 1,
});

export default function ExpensePage() {
  const navigate = useNavigate();

  const categories = [
    "Food",
    "Drink",
    "Transport",
    "Groceries",
    "Health",
    "Shopping",
    "Housing",
  ];

  const [calendarMode, setCalendarMode] = useState("week");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 3, 7));
  const [savedExpenses, setSavedExpenses] = useState([]);
  const [deletedSampleIds, setDeletedSampleIds] = useState([]);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedExpenseToDelete, setSelectedExpenseToDelete] = useState(null);

  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("");

  useEffect(() => {
    async function loadExpenses() {
      try {
        const expenses = await getAllExpenses();
        console.log("expenses from backend:", expenses);

        setSavedExpenses(Array.isArray(expenses) ? expenses : []);
      } catch (error) {
        console.log("Error loading expenses:", error);
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
      category: "Transport",
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

  const visibleSampleExpenses = sampleExpenses.filter(
    (expense) => !deletedSampleIds.includes(expense.id)
  );

  const allExpenses = [...visibleSampleExpenses, ...savedExpenses];

  const formatDate = (date) => date.toISOString().split("T")[0];

  const selectedDateString = formatDate(selectedDate);
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();

  const filteredExpenses = allExpenses.filter((expense) => {
    if (!expense.date) return false;

    const expenseDateString = String(expense.date).split("T")[0];
    const expenseDate = new Date(expenseDateString + "T00:00:00");

    const matchesDate =
      calendarMode === "week"
        ? expenseDateString === selectedDateString
        : expenseDate.getMonth() === selectedMonth &&
          expenseDate.getFullYear() === selectedYear;

    const categoryName = expense.category || expense.category_name || "";

    const matchesCategory =
      !selectedCategoryFilter ||
      categoryName.toLowerCase() === selectedCategoryFilter.toLowerCase();

    return matchesDate && matchesCategory;
  });

  const totalAmount = filteredExpenses.reduce((total, expense) => {
    return total + Number(String(expense.amount || 0).replace("$", ""));
  }, 0);

  const getExpenseIcon = (expense) => {
    const iconType = (
      expense.iconType ||
      expense.category ||
      expense.category_name ||
      ""
    ).toLowerCase();

    if (iconType.includes("bus") || iconType.includes("transport"))
      return <DirectionsBusIcon />;

    if (iconType.includes("drink") || iconType.includes("food"))
      return <LocalCafeIcon />;

    if (iconType.includes("grocery") || iconType.includes("shopping"))
      return <ShoppingCartIcon />;

    if (iconType.includes("health")) return <FitnessCenterIcon />;

    return <ShoppingCartIcon />;
  };

  const getExpenseId = (expense) => expense.expense_id || expense.id;

  const handleEditExpense = (expense) => {
    const expenseId = getExpenseId(expense);
    navigate(`/edit-expense/${expenseId}`);
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      await deleteExpense(expenseId);

      setSavedExpenses((prev) =>
        prev.filter(
          (expense) => String(getExpenseId(expense)) !== String(expenseId)
        )
      );

      setDeletedSampleIds((prev) => {
        if (String(expenseId).startsWith("sample")) {
          return [...prev, expenseId];
        }
        return prev;
      });

      setOpenMenuIndex(null);
    } catch (error) {
      console.log("Error deleting expense:", error);
    }
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "40px",
            px: "4px",
          }}
        >
          <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
            9:41
          </Typography>

          <Box sx={{ display: "flex", gap: 0.5, color: "#3D3D3D" }}>
            <SignalCellular4BarIcon sx={{ fontSize: 20 }} />
            <WifiIcon sx={{ fontSize: 20 }} />
            <BatteryFullIcon sx={{ fontSize: 23 }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: "28px", sm: "35px" },
            mb: "28px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "26px" },
                fontWeight: 700,
                color: "#004B3B",
              }}
            >
              Expense
            </Typography>

            <Box
              sx={{
                width: { xs: 130, sm: 145 },
                height: 5,
                borderRadius: "10px",
                backgroundColor: "#A7C26E",
                mt: "12px",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "26px" },
              fontWeight: 700,
              color: "#91AE5F",
            }}
          >
            Insight
          </Typography>
        </Box>

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

        <Box
          sx={{
            border: "1px solid #1C9A72",
            borderRadius: "7px",
            overflow: "hidden",
            mb: "14px",
            backgroundColor: "#FAFCF7",

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
            <Typography sx={{ fontSize: "18px" }}>
              {calendarMode === "week" ? "Total" : "Monthly"}
            </Typography>

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

          <FilterAltOutlinedIcon
            onClick={() => setFilterModalOpen(true)}
            sx={{ color: "#005242", fontSize: 32, cursor: "pointer" }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <Box
                key={getExpenseId(expense)}
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
                      {expense.time || "7:05am"}
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
                      {expense.title || expense.name}
                    </Typography>

                    <Typography sx={{ fontSize: "14px", color: "#005242" }}>
                      {expense.category_name ||
                        expense.category ||
                        `Category ${expense.category_id || ""}`}
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
                      onClick={() => handleEditExpense(expense)}
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
                      onClick={() => {
                        setSelectedExpenseToDelete(expense);
                        setDeleteModalOpen(true);
                      }}
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
                      ${Number(String(expense.amount || 0).replace("$", "")).toFixed(2)}
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

        {filterModalOpen && (
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.35)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                width: 340,
                minHeight: categoryDropdownOpen ? 390 : 260,
                borderRadius: "35px",
                background:
                  "linear-gradient(180deg, #289173 0%, #A6C178 100%)",
                color: "#fff",
                px: 4,
                py: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 4,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <FilterAltOutlinedIcon sx={{ fontSize: 34, color: "#fff" }} />

                  <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
                    Filter
                  </Typography>
                </Box>

                <Typography
                  onClick={() => setFilterModalOpen(false)}
                  sx={{
                    fontSize: 34,
                    color: "#005242",
                    cursor: "pointer",
                    lineHeight: 1,
                  }}
                >
                  ×
                </Typography>
              </Box>

              <Box sx={{ mb: 5 }}>
                <Box
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  sx={{
                    height: 48,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    color: "#005242",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    cursor: "pointer",
                  }}
                >
                  <Typography sx={{ fontSize: 18 }}>
                    {selectedCategoryFilter || "Category"}
                  </Typography>

                  <Typography sx={{ fontSize: 28 }}>
                    {categoryDropdownOpen ? "▾" : "▸"}
                  </Typography>
                </Box>

                {categoryDropdownOpen && (
                  <Box
                    sx={{
                      mt: 2,
                      borderRadius: "22px",
                      backgroundColor: "#fff",
                      p: 2,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {categories.map((cat) => (
                      <Button
                        key={cat}
                        onClick={() => setSelectedCategoryFilter(cat)}
                        sx={{
                          minWidth: 95,
                          borderRadius: 2,
                          border: "1px solid #93AF58",
                          backgroundColor:
                            selectedCategoryFilter === cat
                              ? "#005242"
                              : "#EAF4D4",
                          color:
                            selectedCategoryFilter === cat ? "#fff" : "#000",
                          textTransform: "none",
                          fontSize: 15,
                        }}
                      >
                        {cat}
                      </Button>
                    ))}
                  </Box>
                )}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  onClick={() => {
                    setSelectedCategoryFilter("");
                    setCategoryDropdownOpen(false);
                    setFilterModalOpen(false);
                  }}
                  sx={{
                    flex: 1,
                    height: 56,
                    borderRadius: 30,
                    color: "#005242",
                    fontSize: 22,
                    fontWeight: 700,
                    border: "2px solid white",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  onClick={() => {
                    setCategoryDropdownOpen(false);
                    setFilterModalOpen(false);
                  }}
                  sx={{
                    flex: 1,
                    height: 56,
                    borderRadius: 30,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 700,
                    backgroundColor: "#005242",
                    textTransform: "none",
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Box>
        )}

        {deleteModalOpen && selectedExpenseToDelete && (
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.35)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                width: 340,
                minHeight: 250,
                borderRadius: "35px",
                background:
                  "linear-gradient(180deg, #289173 0%, #A6C178 100%)",
                color: "#fff",
                textAlign: "center",
                px: 3,
                py: 4,
              }}
            >
              <Typography sx={{ fontSize: 30, fontWeight: 700 }}>
                Delete Expense
              </Typography>

              <Typography sx={{ fontSize: 28, mb: 4 }}>
                “{selectedExpenseToDelete.title || selectedExpenseToDelete.name}”?
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  onClick={() => {
                    setDeleteModalOpen(false);
                    setSelectedExpenseToDelete(null);
                  }}
                  sx={{
                    flex: 1,
                    height: 55,
                    borderRadius: 30,
                    color: "#005242",
                    fontSize: 22,
                    fontWeight: 700,
                    border: "2px solid white",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  onClick={() => {
                    handleDeleteExpense(getExpenseId(selectedExpenseToDelete));
                    setDeleteModalOpen(false);
                    setSelectedExpenseToDelete(null);
                  }}
                  sx={{
                    flex: 1,
                    height: 55,
                    borderRadius: 30,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 700,
                    backgroundColor: "#005242",
                    textTransform: "none",
                  }}
                >
                  Apply
                </Button>
              </Box>
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