import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    { id: 1, name: "Starbucks" },
    { id: 2, name: "Bus" },
    { id: 3, name: "F45" },
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
  const [budgetCategory, setBudgetCategory] = useState("");
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

  const handleSaveExpense = () => {
    if (!expenseName || !amount || !category) {
      alert("Please fill Expense Name, Amount, and Category.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      date,
      time: "7:05am",
      title: expenseName,
      category,
      amount: `$${Number(amount).toFixed(2)}`,
      quickExpense,
      iconType: category.toLowerCase(),
    };

    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    localStorage.setItem(
      "expenses",
      JSON.stringify([...savedExpenses, newExpense])
    );

    if (quickExpense) {
      const newQuickExpense = {
        id: Date.now() + 1,
        name: expenseName,
      };

      const savedQuickExpenses =
        JSON.parse(localStorage.getItem("quickExpenses")) || [];

      const updatedQuickExpenses = [
        ...savedQuickExpenses,
        newQuickExpense,
      ];

      localStorage.setItem(
        "quickExpenses",
        JSON.stringify(updatedQuickExpenses)
      );

      setQuickExpenses(updatedQuickExpenses);
    }

    navigate("/expenses");
  };

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
          pt: 8,
          color: "#fff",
        }}
      >
        {/* Quick Expenses */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Quick Expenses
            </Typography>

            <EditIcon sx={{ fontSize: 18 }} />
          </Box>

          {quickExpenses.map((item) => (
            <Box
              key={item.id}
              sx={{
                minHeight: 42,
                border: "1px solid #D9F0B4",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                mb: 1,
              }}
            >
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                {item.name}
              </Typography>

              <IconButton
                onClick={() => deleteQuickExpense(item.id)}
                sx={{ color: "#fff", p: 0 }}
              >
                <DeleteOutlineOutlinedIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          ))}
        </Box>

        {/* Tabs */}
        <Box sx={{ display: "flex", justifyContent: "space-around", mb: 4 }}>
          <Box
            onClick={() => setActiveTab("expense")}
            sx={{ textAlign: "center", cursor: "pointer" }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: activeTab === "expense" ? "#fff" : "#003F33",
              }}
            >
              Expense
            </Typography>

            {activeTab === "expense" && (
              <Box
                sx={{
                  width: 140,
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
                fontSize: 20,
                fontWeight: 700,
                color: activeTab === "budget" ? "#fff" : "#003F33",
              }}
            >
              Budget
            </Typography>

            {activeTab === "budget" && (
              <Box
                sx={{
                  width: 140,
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
            <Typography sx={{ fontSize: 15, mb: 1 }}>Expense Name</Typography>

            <TextField
              fullWidth
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  height: 46,
                  borderRadius: 30,
                  backgroundColor: "#fff",
                },
              }}
            />

            <Box sx={{ display: "flex", gap: 2, mb: 2.5 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 15, mb: 1 }}>Amount</Typography>

                <TextField
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="$"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 46,
                      borderRadius: 30,
                      backgroundColor: "#fff",
                      fontSize: 22,
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1.1 }}>
                <Typography sx={{ fontSize: 15, mb: 1 }}>Date</Typography>

                <TextField
                  fullWidth
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 46,
                      borderRadius: 30,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>
            </Box>

            <Typography sx={{ fontSize: 15, mb: 1 }}>Categories</Typography>

            <Box
              sx={{
                height: 46,
                borderRadius: 30,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                px: 2,
                mb: 3,
              }}
            >
              <TextField
                variant="standard"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                InputProps={{ disableUnderline: true }}
                sx={{ flex: 1 }}
              />

              <ChevronRightIcon sx={{ fontSize: 34, color: "#005242" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
                mb: 4,
              }}
            >
              <Checkbox
                checked={quickExpense}
                onChange={(e) => setQuickExpense(e.target.checked)}
                sx={{
                  color: "#fff",
                  p: 0,
                  "&.Mui-checked": { color: "#fff" },
                }}
              />

              <Typography sx={{ fontSize: 14 }}>
                Save this as a quick expense
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleSaveExpense}
                sx={{
                  width: 200,
                  height: 52,
                  borderRadius: 40,
                  backgroundColor: "#005242",
                  color: "#fff",
                  fontSize: 18,
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
            <Box
              sx={{
                width: 220,
                height: 46,
                mx: "auto",
                mb: 4,
                borderRadius: 30,
                backgroundColor: "#005242",
                display: "flex",
                overflow: "hidden",
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
                    color: "#fff",
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
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 15, mb: 1 }}>Amount</Typography>

                <TextField
                  fullWidth
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                  placeholder="$"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 46,
                      borderRadius: 30,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1.1 }}>
                <Typography sx={{ fontSize: 15, mb: 1 }}>Date</Typography>

                <TextField
                  fullWidth
                  type="date"
                  value={budgetDate}
                  onChange={(e) => setBudgetDate(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 46,
                      borderRadius: 30,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>
            </Box>

            <Typography sx={{ fontSize: 15, mb: 1 }}>Categories</Typography>

            <Box
              sx={{
                height: 46,
                borderRadius: 30,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                px: 2,
                mb: 5,
              }}
            >
              <TextField
                variant="standard"
                value={budgetCategory}
                onChange={(e) => setBudgetCategory(e.target.value)}
                InputProps={{ disableUnderline: true }}
                sx={{ flex: 1 }}
              />

              <ChevronRightIcon sx={{ fontSize: 34, color: "#005242" }} />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleSaveBudget}
                sx={{
                  width: 200,
                  height: 52,
                  borderRadius: 40,
                  backgroundColor: "#005242",
                  color: "#fff",
                  fontSize: 18,
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