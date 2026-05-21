import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";

import { getExpense, editExpense } from "../../../api/expenses";

export default function EditExpensePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [expense, setExpense] = useState(null);

  useEffect(() => {
    async function loadExpense() {
      try {
        const currentExpense = await getExpense(id);

        setExpense(currentExpense)

        setName(currentExpense.title || "");
        setCategory(currentExpense.category_id || "");
        setAmount(currentExpense.amount || "");
        setDate(currentExpense.date?.split("T")[0] || "");
      } catch (err) {
        console.error(err);
      }
    }

    loadExpense();
  }, [id]);

  const handleApply = async () => {
    try {
      await editExpense(id, {
        title: name,
        category_id: category,
        amount: Number(amount),
        date,
        note: "",
        quick_expense: expense?.quick_expense ?? false,
      });

      navigate("/expenses");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 390,
          minHeight: 390,
          borderRadius: "35px",
          background: `linear-gradient(
            180deg,
            ${theme.palette.primary.main} 0%,
            ${theme.palette.success.main} 100%
          )`,
          px: { xs: 3, sm: 4 },
          py: 4,
          color: "primary.contrastText",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
          <EditIcon sx={{ fontSize: 30, color: "primary.contrastText" }} />

          <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "primary.contrastText" }}>
            Edit
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            alignItems: "center",
            mb: 2.5,
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: "26px", color: "primary.contrastText" }}>Name</Typography>

          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: 46,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            alignItems: "center",
            mb: 2.5,
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: "26px", color: "primary.contrastText" }}>Category</Typography>

          <TextField
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: 46,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            alignItems: "center",
            mb: 2.5,
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: "26px", color: "primary.contrastText" }}>Amount</Typography>

          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: 46,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            alignItems: "center",
            mb: 3,
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: "26px", color: "primary.contrastText" }}>Date</Typography>

          <TextField
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: 46,
                fontSize: "18px",
              },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}>
          <Button
            onClick={() => navigate("/expenses")}
            sx={{
              width: 140,
              height: 58,
              borderRadius: "35px",
              color: "primary.dark",
              fontSize: "24px",
              fontWeight: 700,
              border: `2px solid ${theme.palette.primary.contrastText}`,
              backgroundColor: "rgba(255,255,255,0.35)",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleApply}
            sx={{
              width: 140,
              height: 58,
              borderRadius: "35px",
              color: "primary.contrastText",
              fontSize: "24px",
              fontWeight: 700,
              bgcolor: "primary.dark",
              textTransform: "none",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
}