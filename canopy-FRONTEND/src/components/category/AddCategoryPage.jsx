import { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";

import {
  SignalCellular4Bar,
  Wifi,
  BatteryFull,
  ArrowBackIosNew,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

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

import { useNavigate } from "react-router-dom";

export default function AddCategoryPage() {
  const navigate = useNavigate();

  const [selectedIcon, setSelectedIcon] =
    useState(FavoriteBorderIcon);

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
        bgcolor: "#a8c278",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* STATUS BAR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
          color: "#23343b",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
          9:41
        </Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4Bar sx={{ fontSize: 16 }} />
          <Wifi sx={{ fontSize: 16 }} />
          <BatteryFull sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* BACK BUTTON */}
      <IconButton
        onClick={() => navigate("/category")}
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

      {/* MAIN GREEN PANEL */}
      <Box
        sx={{
          position: "absolute",
          top: 105,
          width: "100%",
          minHeight: "calc(100svh - 105px)",
          borderTopLeftRadius: 38,
          borderTopRightRadius: 38,
          px: 3,
          pt: 7,
          pb: 5,
          background:
            "linear-gradient(180deg, #24936d 0%, #9bc47d 100%)",
          boxShadow: "0px -8px 24px rgba(0,0,0,0.12)",
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            color: "white",
            fontSize: 42,
            fontWeight: 800,
            textAlign: "center",
            mb: 5,
          }}
        >
          Add Category
        </Typography>

        {/* CATEGORY INPUT */}
        <TextField
          fullWidth
          variant="outlined"
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              height: 60,
              borderRadius: 10,
              bgcolor: "#f7faf2",
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />

        {/* ICONS TITLE */}
        <Typography
          sx={{
            color: "white",
            fontSize: 18,
            mb: 1.5,
          }}
        >
          Icons
        </Typography>

        {/* SELECTED ICON */}
        <Box
          sx={{
            width: "100%",
            height: 60,
            borderRadius: 10,
            bgcolor: "#f7faf2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <SelectedIcon
            sx={{
              fontSize: 42,
              color: "#004638",
            }}
          />
        </Box>

        {/* ICON GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyItems: "center",
            rowGap: 4,
            mb: 6,
          }}
        >
          {icons.map((Icon, index) => (
            <IconButton
              key={index}
              onClick={() => setSelectedIcon(() => Icon)}
              sx={{
                color:
                  selectedIcon === Icon
                    ? "#004638"
                    : "white",
              }}
            >
              <Icon sx={{ fontSize: 38 }} />
            </IconButton>
          ))}
        </Box>

        {/* SAVE BUTTON */}
        <Button
          fullWidth
          onClick={() => navigate("/category")}
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

        {/* BOTTOM NAVIGATION */}
        <Box
          sx={{
            width: 120,
            height: 56,
            bgcolor: "#2f2f2f",
            borderRadius: 5,
            mx: "auto",
            mt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
          }}
        >
          <ChevronLeft sx={{ color: "white" }} />

          <Box
            sx={{
              width: 1,
              height: 30,
              bgcolor: "#555",
            }}
          />

          <ChevronRight sx={{ color: "white" }} />
        </Box>
      </Box>
    </Box>
  );
}