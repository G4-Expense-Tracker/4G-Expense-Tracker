import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";

import {
  SignalCellular4Bar,
  Wifi,
  BatteryFull,
  ArrowBackIosNew,
  KeyboardArrowRight,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function AddExpensePage() {
  const navigate = useNavigate();

  const inputStyle = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      height: 50,
      borderRadius: "28px",
      bgcolor: "#f8fbf2",
      "& fieldset": { border: "none" },
    },
    "& input": {
      color: "#004638",
      fontWeight: 600,
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#a8c278",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
          color: "#23343b",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4Bar sx={{ fontSize: 16 }} />
          <Wifi sx={{ fontSize: 16 }} />
          <BatteryFull sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* Back Button */}
      <IconButton
        onClick={() => navigate("/dashboard")}
        sx={{
          position: "absolute",
          top: 72,
          left: 18,
          color: "#23343b",
          zIndex: 5,
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      {/* Dark Green Form Panel */}
      <Box
        sx={{
          mt: 10,
          minHeight: "calc(100svh - 80px)",
          borderTopLeftRadius: 38,
          borderTopRightRadius: 38,
          px: 3,
          pt: 6,
          pb: 5,
          background: "linear-gradient(180deg, #24936d 0%, #7db36d 100%)",
          color: "white",
        }}
      >
        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 800,
              borderBottom: "3px solid #fff7cc",
              pb: 0.5,
            }}
          >
            Expense
          </Typography>

          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 700,
              color: "#004638",
              opacity: 0.9,
            }}
          >
            Budget
          </Typography>
        </Box>

        <Typography sx={{ mb: 1 }}>Expense Name</Typography>
        <TextField fullWidth sx={inputStyle} />

        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1 }}>Amount</Typography>
            <TextField fullWidth placeholder="$" sx={inputStyle} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1 }}>Date</Typography>
            <TextField
              fullWidth
              defaultValue="April 13, 2026"
              sx={inputStyle}
            />
          </Box>
        </Box>

        <Typography sx={{ mb: 1 }}>Categories</Typography>
        <TextField
          fullWidth
          onClick={() => navigate("/category")}
          sx={{
            ...inputStyle,
            cursor: "pointer",
          }}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowRight sx={{ color: "#004638" }} />
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#f8fbf2",
                "&.Mui-checked": {
                  color: "#004638",
                },
              }}
            />
          }
          label={
            <Typography sx={{ color: "white", fontSize: 14 }}>
              Save this as a quick expense
            </Typography>
          }
          sx={{ mb: 4 }}
        />

        <Button
          fullWidth
          onClick={() => navigate("/dashboard")}
          sx={{
            width: "72%",
            height: 58,
            mx: "auto",
            display: "block",
            borderRadius: 10,
            bgcolor: "#004638",
            color: "white",
            fontSize: 22,
            fontWeight: 800,
            textTransform: "none",
            boxShadow: "0px 10px 18px rgba(0,0,0,0.18)",
            "&:hover": {
              bgcolor: "#00352d",
            },
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}