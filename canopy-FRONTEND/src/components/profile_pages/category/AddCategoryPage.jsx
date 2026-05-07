import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import SoapOutlinedIcon from "@mui/icons-material/SoapOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useNavigate } from "react-router-dom";

export default function AddCategoryPage() {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState(FavoriteBorderIcon);

  const icons = [
    FavoriteBorderIcon,
    PaletteOutlinedIcon,
    CardGiftcardIcon,
    SportsBarIcon,
    CakeOutlinedIcon,
    ComputerIcon,
    SavingsOutlinedIcon,
    LocalCafeOutlinedIcon,
    SportsBasketballOutlinedIcon,
    SportsEsportsOutlinedIcon,
    LocalHospitalOutlinedIcon,
    SoapOutlinedIcon,
    FastfoodOutlinedIcon,
    DirectionsBikeOutlinedIcon,
  ];

  const SelectedIcon = selectedIcon;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#a7c17b",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Status bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
          color: "#2d3f49",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 16 }} />
          <WifiIcon sx={{ fontSize: 16 }} />
          <BatteryFullIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* Back button */}
      <IconButton
        onClick={() => navigate("/category")}
        sx={{
          position: "absolute",
          top: 72,
          left: 18,
          color: "#2d3f49",
          zIndex: 3,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Main card */}
      <Box
        sx={{
          position: "absolute",
          top: 95,
          left: 0,
          width: "100%",
          minHeight: "calc(100svh - 95px)",
          px: 3,
          pt: 7,
          pb: 4,
          borderTopLeftRadius: 36,
          borderTopRightRadius: 36,
          background:
            "linear-gradient(180deg, #2f9b78 0%, #7db36d 100%)",
          boxShadow: "0 -8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 40,
            fontWeight: 800,
            textAlign: "center",
            mb: 5,
          }}
        >
          Add Category
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              height: 58,
              borderRadius: 10,
              bgcolor: "#f8fbf2",
              "& fieldset": { border: "none" },
            },
          }}
        />

        <Typography
          sx={{
            color: "white",
            fontSize: 20,
            mb: 1.5,
          }}
        >
          Icons
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: 58,
            borderRadius: 10,
            bgcolor: "#f8fbf2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <SelectedIcon sx={{ fontSize: 36, color: "#004638" }} />
        </Box>

        {/* Icon grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            rowGap: 2.5,
            columnGap: 2,
            mb: 5,
          }}
        >
          {icons.map((Icon, index) => (
            <IconButton
              key={index}
              onClick={() => setSelectedIcon(() => Icon)}
              sx={{
                color:
                  selectedIcon === Icon ? "#004638" : "rgba(255,255,255,0.95)",
              }}
            >
              <Icon sx={{ fontSize: 34 }} />
            </IconButton>
          ))}
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/category")}
          sx={{
            width: "70%",
            height: 58,
            mx: "auto",
            display: "block",
            borderRadius: 8,
            bgcolor: "#00503f",
            color: "white",
            fontSize: 24,
            fontWeight: 800,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#003f32",
            },
          }}
        >
          Save
        </Button>

        {/* Bottom arrows */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 52,
            borderRadius: 5,
            bgcolor: "#2d2d2d",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          <KeyboardArrowLeftIcon />
          <Box sx={{ width: "1px", height: 32, bgcolor: "#555" }} />
          <KeyboardArrowRightIcon />
        </Box>
      </Box>
    </Box>
  );
}
