import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { createNewExpense } from "../../../api/expenses";
import { setBudget } from "../../../api/budgets";

export default function AddExpensePage() {
  const navigate = useNavigate();

  // =========================
  // Tabs
  // =========================
  const [activeTab, setActiveTab] = useState("expense");

  // =========================
  // Expense states
  // =========================
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("2026-04-13");
  const [quickExpense, setQuickExpense] = useState(false);

  // =========================
  // Budget states
  // =========================
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetDate, setBudgetDate] = useState("2026-04-13");
  const [budgetCategory, setBudgetCategory] = useState("");
  const [budgetType, setBudgetType] = useState("Monthly");

  // =========================
  // Save Expense
  // =========================
  const handleSaveExpense = async () => {
    try {
      if (!expenseName || !amount || !category) {
        alert("Please fill Expense Name, Amount and Category.");
        return;
      }

      const newExpense = {
        category_id: Number(category),
        title: expenseName,
        amount: Number(amount),
        date,
        note: "",
        quick_expense: quickExpense,
      };

      console.log(newExpense);

      await createNewExpense(newExpense);

      alert("Expense saved successfully!");

      navigate("/expenses");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // =========================
  // Save Budget
  // =========================
  const handleSaveBudget = () => {
    if (!budgetAmount || !budgetCategory) {
      alert("Please fill Amount and Category.");
      return;
    }

    const newBudget = {
      id: Date.now(),
      type: budgetType,
      amount: `$${Number(budgetAmount).toFixed(2)}`,
      date: budgetDate,
      category: budgetCategory,
    };

    const savedBudgets =
      JSON.parse(localStorage.getItem("budgets")) || [];

    const updatedBudgets = [...savedBudgets, newBudget];

    localStorage.setItem(
      "budgets",
      JSON.stringify(updatedBudgets)
    );

    console.log("Saved budgets:", updatedBudgets);

    alert("Budget saved successfully!");

    navigate("/expenses");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Mobile Screen */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          backgroundColor: "#E8F0D1",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ========================= */}
        {/* Status Bar */}
        {/* ========================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            pt: 4,
            mb: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: "#5A6146",
            }}
          >
            9:41
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              color: "#5A6146",
            }}
          >
            <SignalCellular4BarIcon />
            <WifiIcon />
            <BatteryFullIcon />
          </Box>
        </Box>

        {/* ========================= */}
        {/* Tabs */}
        {/* ========================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 5,
            mb: 8,
            position: "relative",
            zIndex: 20,
          }}
        >
          {/* Expense Tab */}
          <Box
            onClick={() => setActiveTab("expense")}
            sx={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                color:
                  activeTab === "expense"
                    ? "#2F6A4F"
                    : "#000",
              }}
            >
              Expense
            </Typography>

            {activeTab === "expense" && (
              <Box
                sx={{
                  width: 150,
                  height: 5,
                  borderRadius: 10,
                  backgroundColor: "#93AF58",
                  mt: 2,
                }}
              />
            )}
          </Box>

          {/* Budget Tab */}
          <Box
            onClick={() => setActiveTab("budget")}
            sx={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                color:
                  activeTab === "budget"
                    ? "#2F6A4F"
                    : "#000",
              }}
            >
              Budget
            </Typography>

            {activeTab === "budget" && (
              <Box
                sx={{
                  width: 150,
                  height: 5,
                  borderRadius: 10,
                  backgroundColor: "#93AF58",
                  mt: 2,
                }}
              />
            )}
          </Box>
        </Box>

        {/* ========================= */}
        {/* Bottom Popup */}
        {/* ========================= */}
        <Box
          sx={{
            position: "absolute",
            top: 230,
            left: 0,
            width: "100%",
            height: 620,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            background:
              "linear-gradient(180deg, #289173 0%, #A6C178 100%)",
            px: 4,
            pt: 5,
            zIndex: 5,
          }}
        >
          {/* ================================= */}
          {/* Expense Form */}
          {/* ================================= */}
          {activeTab === "expense" ? (
            <>
              {/* Expense Name */}
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 22,
                  mb: 1,
                }}
              >
                Expense Name
              </Typography>

              <TextField
                fullWidth
                value={expenseName}
                onChange={(e) =>
                  setExpenseName(e.target.value)
                }
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    height: 56,
                  },
                }}
              />

              {/* Amount + Date */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 4,
                }}
              >
                {/* Amount */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: 22,
                      mb: 1,
                    }}
                  >
                    Amount
                  </Typography>

                  <TextField
                    fullWidth
                    value={amount}
                    onChange={(e) =>
                      setAmount(e.target.value)
                    }
                    placeholder="$"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 30,
                        backgroundColor: "#fff",
                        height: 56,
                      },
                    }}
                  />
                </Box>

                {/* Date */}
                <Box sx={{ flex: 1.2 }}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: 22,
                      mb: 1,
                    }}
                  >
                    Date
                  </Typography>

                  <TextField
                    fullWidth
                    type="date"
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 30,
                        backgroundColor: "#fff",
                        height: 56,
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Category */}
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 22,
                  mb: 1,
                }}
              >
                Categories
              </Typography>

              <Box
                sx={{
                  height: 56,
                  borderRadius: 30,
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  mb: 5,
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Select Category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ flex: 1 }}
                />

                <ChevronRightIcon
                  sx={{
                    fontSize: 38,
                    color: "#005242",
                  }}
                />
              </Box>

              {/* Quick Expense */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  mb: 6,
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Save this as a quick expense
                </Typography>

                <Checkbox
                  checked={quickExpense}
                  onChange={(e) =>
                    setQuickExpense(
                      e.target.checked
                    )
                  }
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              </Box>

              {/* Save Expense */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="button"
                  onClick={handleSaveExpense}
                  sx={{
                    width: 220,
                    height: 70,
                    borderRadius: 40,
                    backgroundColor: "#005242",
                    color: "#fff",
                    fontSize: 30,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#005242",
                    },
                  }}
                >
                  Save
                </Button>
              </Box>
            </>
          ) : (
            <>
              {/* ================================= */}
              {/* Budget Form */}
              {/* ================================= */}

              {/* Daily Monthly Toggle */}
              <Box
                sx={{
                  width: 230,
                  height: 48,
                  mx: "auto",
                  mb: 5,
                  borderRadius: 30,
                  backgroundColor: "#005242",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                {["Daily", "Monthly"].map(
                  (type) => (
                    <Box
                      key={type}
                      onClick={() =>
                        setBudgetType(type)
                      }
                      sx={{
                        flex: 1,
                        height: "100%",
                        borderRadius: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        cursor: "pointer",
                        background:
                          budgetType === type
                            ? "linear-gradient(180deg, #2C7D6C 0%, #005242 100%)"
                            : "transparent",
                      }}
                    >
                      {type}
                    </Box>
                  )
                )}
              </Box>

              {/* Amount + Date */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 4,
                }}
              >
                {/* Amount */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: 22,
                      mb: 1,
                    }}
                  >
                    Amount
                  </Typography>

                  <TextField
                    fullWidth
                    value={budgetAmount}
                    onChange={(e) =>
                      setBudgetAmount(
                        e.target.value
                      )
                    }
                    placeholder="$"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 30,
                        backgroundColor: "#fff",
                        height: 56,
                      },
                    }}
                  />
                </Box>

                {/* Date */}
                <Box sx={{ flex: 1.2 }}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: 22,
                      mb: 1,
                    }}
                  >
                    Date
                  </Typography>

                  <TextField
                    fullWidth
                    type="date"
                    value={budgetDate}
                    onChange={(e) =>
                      setBudgetDate(
                        e.target.value
                      )
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 30,
                        backgroundColor: "#fff",
                        height: 56,
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Category */}
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 22,
                  mb: 1,
                }}
              >
                Categories
              </Typography>

              <Box
                sx={{
                  height: 56,
                  borderRadius: 30,
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  mb: 8,
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Select Category"
                  value={budgetCategory}
                  onChange={(e) =>
                    setBudgetCategory(
                      e.target.value
                    )
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ flex: 1 }}
                />

                <ChevronRightIcon
                  sx={{
                    fontSize: 38,
                    color: "#005242",
                  }}
                />
              </Box>

              {/* Save Budget */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="button"
                  onClick={handleSaveBudget}
                  sx={{
                    width: 220,
                    height: 70,
                    borderRadius: 40,
                    backgroundColor: "#005242",
                    color: "#fff",
                    fontSize: 30,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#005242",
                    },
                  }}
                >
                  Save
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}