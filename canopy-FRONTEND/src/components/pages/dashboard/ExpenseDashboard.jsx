import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import BottomNav from "./Bottomnav.jsx";

import { createNewExpense } from "../../../api/expenses.js";

export default function ExpenseDashboard() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [note, setNote] = useState("");
  const [quickExpense, setQuickExpense] = useState(false);

  async function handleSubmit() {
    try {
      const expenseData = {
        category_id: Number(categoryId),
        title: title,
        amount: Number(amount),
        date: date,
        note: note,
        quick_expense: quickExpense,
      };

      const data = await createNewExpense(expenseData);

      if (data.success) {
        console.log("Expense added!");
        setTitle("");
        setAmount("");
        setDate("");
        setCategoryId("");
        setNote("");
        setQuickExpense(false);
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#f8fbf2",
        p: 2,
        pb: 10,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 700, color: "#00503f", mb: 1 }}>
          Quick Expenses ✏️
        </Typography>

        {["Starbucks", "Bus", "F45"].map((item) => (
          <Box
            key={item}
            sx={{
              border: "1px solid #7dbb9c",
              borderRadius: 2,
              p: 1,
              mb: 1,
              bgcolor: "#edf7ea",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>{item}</Typography>
            <Typography sx={{ fontSize: 12 }}>
              {item === "Starbucks"
                ? "Foods and Drinks"
                : item === "Bus"
                ? "Transport"
                : "Health"}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          borderRadius: 5,
          background: "linear-gradient(180deg,#33996f 0%, #7eb170 100%)",
          p: 3,
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around", mb: 4 }}>
          <Typography sx={{ fontWeight: 700, borderBottom: "2px solid #d9f4d2" }}>
            Expense
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>Budget</Typography>
        </Box>

        <Typography sx={{ mb: 1, fontSize: 13 }}>Expense Name</Typography>
        <TextField 
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={inputStyle} 
        />

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 13 }}>Amount</Typography>
            <TextField 
              fullWidth
              placeholder="$"
              type="number"
              slotProps={{
                htmlInput: { min: 0 }
              }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 13 }}>Date</Typography>
            <TextField
              fullWidth
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              sx={inputStyle} 
            />
          </Box>
        </Box>

        <Typography sx={{ mb: 1, fontSize: 13 }}>Categories</Typography>
        <TextField
          fullWidth
          value={categoryId}
          type="number"
          slotProps={{
            htmlInput: { min: 0 }
          }}
          onChange={(e) => setCategoryId(e.target.value)}
          sx={inputStyle}
        />

        <FormControlLabel
          control={<Checkbox
            checked={quickExpense}
            onChange={(e) => setQuickExpense(e.target.checked)}
            sx={{ color: "white" }} 
          />}
          label={
            <Typography sx={{ color: "white", fontSize: 13 }}>
              Save this as a quick expense
            </Typography>
          }
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            height: 50,
            borderRadius: 6,
            bgcolor: "#00503f",
            textTransform: "none",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Save
        </Button>
      </Box>

      <BottomNav />
    </Box>
  );
}

const inputStyle = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    borderRadius: 5,
    bgcolor: "white",
    height: 44,
  },
};