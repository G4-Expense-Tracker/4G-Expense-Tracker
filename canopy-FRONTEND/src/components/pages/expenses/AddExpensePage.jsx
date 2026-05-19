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
// Backend Importing:
/* =========================================================
   BACKEND API IMPORTS
   =========================================================
   These functions connect this page to the backend API.

   getAllQuickExpenses()
   -> fetches quick expenses from backend

   createNewExpense()
   -> creates new expense in backend database

   deleteExpense()
   -> deletes expense from backend database
========================================================= */

// import {
//   getAllQuickExpenses,
//   createNewExpense,
//   deleteExpense,
// } from "../../../api/expenses";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { createNewExpense } from "../../../api/expenses";
import { setBudget } from "../../../api/budgets";

export default function AddExpensePage() {
  const navigate = useNavigate();
    /* =========================================================
     DEFAULT FALLBACK QUICK EXPENSES
     =========================================================
     Used only if backend request fails
  ========================================================= */

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

  // =========================
  // Save Expense
  // =========================
  const handleSaveExpense = async () => {
    try {
      if (!expenseName || !amount || !category) {
        alert("Please fill Expense Name, Amount and Category.");
        return;
      }
  //Backend Code:
  /* =========================================================
     FETCH QUICK EXPENSES FROM BACKEND
     =========================================================
     Runs when page loads.

     Backend route:
     GET /expenses/list?quickExpense=true
  ========================================================= */

  // useEffect(() => {
  //   fetchQuickExpenses();
  // }, []);

  // const fetchQuickExpenses = async () => {

  //   try {

  // backend API request
  //     const data = await getAllQuickExpenses();

  // update frontend state
  //     if (data && data.length > 0) {
  //       setQuickExpenses(data);
  //     }

  //   } catch (error) {

  //     console.error("Quick expenses error:", error);

      // fallback local data
  //     setQuickExpenses(defaultQuickExpenses);
  //   }
  // };

  // /* =========================================================
  //    DELETE QUICK EXPENSE
  //    =========================================================
  //    Backend route:
  //    POST /expenses/:id/delete
  // ========================================================= */

  // const deleteQuickExpense = async (id) => {

  //   try {

      // backend delete request
  //     await deleteExpense(id);

      // remove item from frontend state
  //     setQuickExpenses((prev) =>
  //       prev.filter((item) => item.id !== id)
  //     );

  //   } catch (error) {

  //     console.error("Delete quick expense error:", error);

  //     alert(error.message);
  //   }
  // };

  // /* =========================================================
    //  SAVE NEW EXPENSE
    //  =========================================================
    //  Backend route:
    //  POST /expenses/new

    //  Sends:
    //  - title
    //  - amount
    //  - category
    //  - date
    //  - quickExpense
  // ========================================================= */

  // const handleSaveExpense = async () => {

    // simple validation
  //   if (!expenseName || !amount || !category) {

  //     alert("Please fill Expense Name, Amount and Category.");
  //     return;
  //   }

  //   /* -------------------------------------------------------
      // expense object sent to backend
  //   ------------------------------------------------------- */

  //   const newExpense = {
  //     title: expenseName,
  //     amount: Number(amount),
  //     date,
  //     category,
  //     quickExpense,
  //   };

  //   try {

  //     console.log("Sending expense:", newExpense);

      // backend API request
  //     const result = await createNewExpense(newExpense);

  //     console.log("Saved expense:", result);

      // redirect to expenses page
  //     navigate("/expenses");

  //   } catch (error) {

  //     console.error("Save expense error:", error);

  //     alert(error.message);
  //   }
  // };

  /* =========================================================
     SAVE BUDGET
     =========================================================
     Uses same backend endpoint:
     POST /expenses/new
  ========================================================= */

  // const handleSaveBudget = async () => {

  //   if (!budgetAmount) {

  //     alert("Please fill Amount.");
  //     return;
  //   }

  //   const newBudget = {
  //     title: `${budgetType} Budget`,
  //     amount: Number(budgetAmount),
  //     date: budgetDate,
  //     category: "Budget",
  //     quickExpense: false,
  //     type: budgetType,
  //   };

  //   try {

  //     console.log("Sending budget:", newBudget);

   // backend request
  //     await createNewExpense(newBudget);

  //     navigate("/dashboard");

  //   } catch (error) {

  //     console.error("Save budget error:", error);

  //     alert(error.message);
  //   }
  // };

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
        category: category === "Food" ? "Foods and Drinks" : category,
      };

      const savedQuickExpenses =
        JSON.parse(localStorage.getItem("quickExpenses")) || [];

      const updatedQuickExpenses = [...savedQuickExpenses, newQuickExpense];

      localStorage.setItem(
        "quickExpenses",
        JSON.stringify(updatedQuickExpenses)
      );

      setQuickExpenses(updatedQuickExpenses);
    }

      navigate("/expenses");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // =========================
  // Save Budget
  // =========================
  const handleSaveBudget = async () => {
    try {
      if (!budgetAmount || !budgetType) {
        alert("Please fill Amount and Budget Type.");
        return;
      }
  const handleSaveBudget = () => {
    if (!budgetAmount) {
      alert("Please fill Amount.");
      return;
    }

      const newBudget = {
        timeframe: budgetType.toLowerCase(),
        amount: Number(budgetAmount),
      };

      await setBudget(newBudget);

      alert("Budget saved successfully!");
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

      navigate("/expenses");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
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
                type="number"
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
                    type="number"
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