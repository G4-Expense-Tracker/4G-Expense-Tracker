import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import BottomNav from "./Bottomnav.jsx";

export default function ExpenseDashboard() {
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
        <TextField fullWidth sx={inputStyle} />

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 13 }}>Amount</Typography>
            <TextField fullWidth placeholder="$" sx={inputStyle} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 13 }}>Date</Typography>
            <TextField fullWidth defaultValue="April 13, 2026" sx={inputStyle} />
          </Box>
        </Box>

        <Typography sx={{ mb: 1, fontSize: 13 }}>Categories</Typography>
        <TextField fullWidth sx={inputStyle} />

        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
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