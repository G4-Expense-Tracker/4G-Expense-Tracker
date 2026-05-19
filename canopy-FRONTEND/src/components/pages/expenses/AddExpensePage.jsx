import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewExpense } from "../../../api/expenses.js";

import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function AddExpensePage() {
  const navigate = useNavigate();

  const defaultQuickExpenses = [
    { id: 1, name: "Starbucks", category: "Foods and Drinks" },
    { id: 2, name: "Bus", category: "Transport" },
    { id: 3, name: "F45", category: "Health" },
  ];

  const [activeTab, setActiveTab] = useState("expense");
  const [quickExpenses, setQuickExpenses] = useState(defaultQuickExpenses);

  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("2026-04-13");
  const [quickExpense, setQuickExpense] = useState(false);

  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetDate, setBudgetDate] = useState("2026-04-13");
  const [budgetType, setBudgetType] = useState("Monthly");

  useEffect(() => {
    const savedQuickExpenses =
      JSON.parse(localStorage.getItem("quickExpenses")) || defaultQuickExpenses;

    setQuickExpenses(savedQuickExpenses);
  }, []);

  const deleteQuickExpense = (id) => {
    const updatedQuickExpenses = quickExpenses.filter((item) => item.id !== id);

    setQuickExpenses(updatedQuickExpenses);

    localStorage.setItem(
      "quickExpenses",
      JSON.stringify(updatedQuickExpenses)
    );
  };

  const handleSaveExpense = async () => {
    if (!expenseName || !amount || !category) {
      alert("Please fill Expense Name, Amount and Category.");
      return;
    }

    const newExpense = {
      name:expenseName,
      amount: Number(amount),
      category: category,
      date: date,
      quickExpense: quickExpense,
    };

    // const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // localStorage.setItem(
    //   "expenses",
    //   JSON.stringify([...savedExpenses, newExpense])
    // );

    // if (quickExpense) {
    //   const newQuickExpense = {
    //     id: Date.now() + 1,
    //     name: expenseName,
    //     category: category === "Food" ? "Foods and Drinks" : category,
    //   };

    //   const savedQuickExpenses =
    //     JSON.parse(localStorage.getItem("quickExpenses")) || [];

    //   const updatedQuickExpenses = [...savedQuickExpenses, newQuickExpense];

    //   localStorage.setItem(
    //     "quickExpenses",
    //     JSON.stringify(updatedQuickExpenses)
    //   );

    //   setQuickExpenses(updatedQuickExpenses);
    // }

    // navigate("/expenses");
    try {
      await createNewExpense(newExpense);
      navigate("/expenses");
    } catch (error) {
    console.error("Error creating expense:", error);
    alert(error.message || "Failed to save expense.");
  }
  };

  const handleSaveBudget = () => {
    if (!budgetAmount) {
      alert("Please fill Amount.");
      return;
    }

    const newBudget = {
      id: Date.now(),
      type: budgetType,
      amount: `$${Number(budgetAmount).toFixed(2)}`,
      date: budgetDate,
    };

    const savedBudgets = JSON.parse(localStorage.getItem("budgets")) || [];

    localStorage.setItem(
      "budgets",
      JSON.stringify([...savedBudgets, newBudget])
    );

    navigate("/dashboard");
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
      <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          background: "linear-gradient(180deg, #289173 0%, #A6C178 100%)",
          px: 3,
          pt: 5,
          pb: 5,
          color: "#fff",
        }}
      >
        {/* QUICK EXPENSES */}
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
              Quick Expenses
            </Typography>

            <EditIcon sx={{ fontSize: 20, color: "#FFFFFF" }} />
          </Box>

          {quickExpenses.map((item) => (
            <Box
              key={item.id}
              sx={{
                minHeight: 64,
                borderRadius: "16px",
                backgroundColor: "#DCE5C8",
                border: "1px solid #D7EEA7",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,
                mb: 1.8,
              }}
            >
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                {item.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#111111",
                  }}
                >
                  {item.category}
                </Typography>

                <IconButton
                  onClick={() => deleteQuickExpense(item.id)}
                  sx={{ color: "#005242", p: 0 }}
                >
                  <DeleteOutlineOutlinedIcon sx={{ fontSize: 22 }} />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>

        {/* EXPENSE / BUDGET TABS */}
        <Box sx={{ display: "flex", justifyContent: "space-around", mb: 5 }}>
          <Box
            onClick={() => setActiveTab("expense")}
            sx={{ textAlign: "center", cursor: "pointer" }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: activeTab === "expense" ? "#FFFFFF" : "#003F33",
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
                  backgroundColor: "#E7F7A5",
                  mt: 1.5,
                }}
              />
            )}
          </Box>

          <Box
            onClick={() => setActiveTab("budget")}
            sx={{ textAlign: "center", cursor: "pointer" }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: activeTab === "budget" ? "#FFFFFF" : "#003F33",
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
                  backgroundColor: "#E7F7A5",
                  mt: 1.5,
                }}
              />
            )}
          </Box>
        </Box>

        {activeTab === "expense" ? (
          <>
            <Typography sx={{ fontSize: 16, mb: 1 }}>Expense Name</Typography>

            <TextField
              fullWidth
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  height: 54,
                  borderRadius: 30,
                  backgroundColor: "#FFFFFF",
                },
              }}
            />

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Amount</Typography>

                <TextField
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="$"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 54,
                      borderRadius: 30,
                      backgroundColor: "#FFFFFF",
                      fontSize: 22,
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Date</Typography>

                <TextField
                  fullWidth
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 54,
                      borderRadius: 30,
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Box>
            </Box>

            <Typography sx={{ fontSize: 16, mb: 1 }}>Categories</Typography>

            <Box
              sx={{
                height: 54,
                borderRadius: 30,
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                px: 2,
                mb: 4,
              }}
            >
              <TextField
                variant="standard"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                InputProps={{ disableUnderline: true }}
                sx={{ flex: 1 }}
              />

              <ChevronRightIcon sx={{ fontSize: 36, color: "#005242" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
                mb: 5,
              }}
            >
              <Checkbox
                checked={quickExpense}
                onChange={(e) => setQuickExpense(e.target.checked)}
                sx={{
                  color: "#FFFFFF",
                  "&.Mui-checked": { color: "#FFFFFF" },
                }}
              />

              <Typography sx={{ fontSize: 15 }}>
                Save this as a quick expense
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleSaveExpense}
                sx={{
                  width: 230,
                  height: 60,
                  borderRadius: 40,
                  backgroundColor: "#005242",
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#005242" },
                }}
              >
                Save
              </Button>
            </Box>
          </>
        ) : (
          <>
            {/* DAILY / MONTHLY BUTTON */}
            <Box
              sx={{
                width: 250,
                height: 58,
                mx: "auto",
                mb: 5,
                borderRadius: 40,
                backgroundColor: "#005242",
                display: "flex",
                p: 0.5,
              }}
            >
              {["Daily", "Monthly"].map((type) => (
                <Box
                  key={type}
                  onClick={() => setBudgetType(type)}
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 40,
                    cursor: "pointer",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    transition: "0.3s",
                    background:
                      budgetType === type
                        ? "linear-gradient(180deg, #2C7D6C 0%, #005242 100%)"
                        : "transparent",
                    boxShadow:
                      budgetType === type
                        ? "0px 0px 15px rgba(255,255,255,0.45)"
                        : "none",
                    border:
                      budgetType === type
                        ? "1px solid rgba(255,255,255,0.5)"
                        : "none",
                  }}
                >
                  {type}
                </Box>
              ))}
            </Box>

            {/* AMOUNT + DATE */}
            <Box sx={{ display: "flex", gap: 2, mb: 8 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Amount</Typography>

                <TextField
                  fullWidth
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                  placeholder="$"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 54,
                      borderRadius: 30,
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Date</Typography>

                <TextField
                  fullWidth
                  type="date"
                  value={budgetDate}
                  onChange={(e) => setBudgetDate(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 54,
                      borderRadius: 30,
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* SAVE BUTTON */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleSaveBudget}
                sx={{
                  width: 230,
                  height: 60,
                  borderRadius: 40,
                  backgroundColor: "#005242",
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#005242" },
                }}
              >
                Save
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

