import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function GoalProgressDemo() {
  // Simulated backend value
  const [savedAmount, setSavedAmount] = useState(0);

  const targetAmount = 1000;

  // Auto calculate percentage
  const progress = Math.min((savedAmount / targetAmount) * 100, 100);

  // Simulate live updates every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSavedAmount((prev) => {
        if (prev >= targetAmount) {
          return targetAmount;
        }

        return prev + 50;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F4F5EF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 320,
          height: 320,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background Circle */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={300}
          thickness={4}
          sx={{
            color: "#F5E7A0",
            position: "absolute",
          }}
        />

        {/* Live Progress Circle */}
        <CircularProgress
          variant="determinate"
          value={progress}
          size={300}
          thickness={4}
          sx={{
            color: "#FFD54F",
            position: "absolute",
            transition: "all 0.5s ease",
          }}
        />

        {/* Percent Bubble */}
        <Box
          sx={{
            position: "absolute",
            top: -5,
            bgcolor: "#004D40",
            color: "white",
            width: 55,
            height: 55,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 16,
            zIndex: 2,
          }}
        >
          {Math.round(progress)}%
        </Box>

        {/* Center Content */}
        <Box sx={{ textAlign: "center", zIndex: 1 }}>
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/2909/2909762.png"
            alt="plant"
            sx={{
              width: 120,
              mb: 2,
            }}
          />

          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 700,
              color: "#004D40",
            }}
          >
            Tuition
          </Typography>

          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              color: "#004D40",
            }}
          >
            ${savedAmount} / {targetAmount}
          </Typography>

          {/* Demo button */}
          <Button
            variant="contained"
            onClick={() => setSavedAmount(savedAmount + 100)}
            sx={{
              mt: 3,
              bgcolor: "#004D40",
            }}
          >
            Add $100
          </Button>
        </Box>
      </Box>
    </Box>
  );
}