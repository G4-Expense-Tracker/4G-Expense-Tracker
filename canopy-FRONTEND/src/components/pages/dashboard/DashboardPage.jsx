import { useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  TextField,
} from "@mui/material";

export default function GoalProgressDemo() {
  // user entered amount
  const [savedAmount, setSavedAmount] = useState(0);

  // goal amount
  const targetAmount = 1000;

  // automatic progress calculation
  const progress =
    targetAmount > 0
      ? Math.min((savedAmount / targetAmount) * 100, 100)
      : 0;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fbf2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 5,
      }}
    >
      {/* Input */}
      <TextField
        type="number"
        label="Enter Savings"
        value={savedAmount}
        onChange={(e) => setSavedAmount(Number(e.target.value))}
        sx={{
          mb: 5,
          width: 220,
        }}
      />

      {/* Circle */}
      <Box
        sx={{
          position: "relative",
          width: 260,
          height: 260,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background circle */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={230}
          thickness={4.5}
          sx={{
            color: "#FFD84D",
            position: "absolute",
          }}
        />

        {/* Dynamic progress */}
        <CircularProgress
          variant="determinate"
          value={progress}
          size={230}
          thickness={4.5}
          sx={{
            color: "#00503f",
            position: "absolute",
            transition: "0.4s",
          }}
        />

        {/* Bubble */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 55,
            width: 42,
            height: 42,
            borderRadius: "50%",
            bgcolor: "#00503f",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          {Math.round(progress)}%
        </Box>

        {/* Center */}
        <Box
          sx={{
            width: 190,
            height: 190,
            borderRadius: "50%",
            bgcolor: "#FFF8CC",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 45 }}>🌱</Typography>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 24,
              color: "#00503f",
            }}
          >
            Tuition
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#00503f",
            }}
          >
            ${savedAmount} / {targetAmount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}