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
      }}
    >
      <Box
        sx={{
          width: 390,
          minHeight: 390,
          borderRadius: "35px",
          background: "linear-gradient(180deg, #289173 0%, #A9BF7E 100%)",
          px: 4,
          py: 4,
          color: "#FFFFFF",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
          <EditIcon sx={{ fontSize: 30 }} />

          <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
            Edit
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            alignItems: "center",
            mb: 2.5,
          }}
        >
          <Typography sx={{ fontSize: "26px" }}>Name</Typography>

          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "#FFFFFF",
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
          }}
        >
          <Typography sx={{ fontSize: "26px" }}>Category</Typography>

          <TextField
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "#FFFFFF",
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
          }}
        >
          <Typography sx={{ fontSize: "26px" }}>Amount</Typography>

          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "#FFFFFF",
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
          }}
        >
          <Typography sx={{ fontSize: "26px" }}>Date</Typography>

          <TextField
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            size="small"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: 46,
                fontSize: "18px",
              },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            onClick={() => navigate("/expenses")}
            sx={{
              width: 140,
              height: 58,
              borderRadius: "35px",
              color: "#005242",
              fontSize: "24px",
              fontWeight: 700,
              border: "2px solid #FFFFFF",
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
              color: "#FFFFFF",
              fontSize: "24px",
              fontWeight: 700,
              backgroundColor: "#005242",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#005242",
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