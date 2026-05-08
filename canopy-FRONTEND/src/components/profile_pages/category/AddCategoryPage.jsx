import { useState } from "react";
import { Box, Typography, TextField, IconButton, Button } from "@mui/material";
import {
  SignalCellular4Bar,
  Wifi,
  BatteryFull,
  ArrowBackIosNew,
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

const iconList = [
  { name: "heart", icon: FavoriteBorderIcon },
  { name: "palette", icon: PaletteOutlinedIcon },
  { name: "gift", icon: CardGiftcardIcon },
  { name: "drink", icon: SportsBarIcon },
  { name: "cake", icon: CakeOutlinedIcon },
  { name: "computer", icon: ComputerIcon },
  { name: "savings", icon: SavingsOutlinedIcon },
  { name: "coffee", icon: LocalCafeOutlinedIcon },
  { name: "basketball", icon: SportsBasketballOutlinedIcon },
  { name: "game", icon: SportsEsportsOutlinedIcon },
  { name: "health", icon: LocalHospitalOutlinedIcon },
  { name: "soap", icon: SoapOutlinedIcon },
  { name: "food", icon: FastfoodOutlinedIcon },
  { name: "bike", icon: DirectionsBikeOutlinedIcon },
];

export default function AddCategoryPage() {
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [selectedIconName, setSelectedIconName] = useState("heart");

  const SelectedIcon =
    iconList.find((item) => item.name === selectedIconName)?.icon ||
    FavoriteBorderIcon;

  function handleSave() {
    if (!categoryName.trim()) return;

    const newCategory = {
      id: Date.now(),
      title: categoryName.trim(),
      iconName: selectedIconName,
    };

    const oldCategories =
      JSON.parse(localStorage.getItem("customCategories")) || [];

    localStorage.setItem(
      "customCategories",
      JSON.stringify([...oldCategories, newCategory])
    );

    navigate("/category");
  }

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
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3, pt: 2 }}>
        <Typography sx={{ fontWeight: 700 }}>9:41</Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <SignalCellular4Bar sx={{ fontSize: 16 }} />
          <Wifi sx={{ fontSize: 16 }} />
          <BatteryFull sx={{ fontSize: 18 }} />
        </Box>
      </Box>

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

      <Box
        sx={{
          mt: 10,
          minHeight: "calc(100svh - 96px)",
          borderTopLeftRadius: 38,
          borderTopRightRadius: 38,
          px: { xs: 2.5, sm: 3 },
          pt: 6,
          pb: 4,
          background: "linear-gradient(180deg, #24936d 0%, #9bc47d 100%)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 36, sm: 42 },
            fontWeight: 800,
            textAlign: "center",
            mb: 4,
          }}
        >
          Add Category
        </Typography>

        <TextField
          fullWidth
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category name"
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              height: 58,
              borderRadius: 10,
              bgcolor: "#f7faf2",
              "& fieldset": { border: "none" },
            },
          }}
        />

        <Typography sx={{ color: "white", fontSize: 18, mb: 1.5 }}>
          Icons
        </Typography>

        <Box
          sx={{
            height: 58,
            borderRadius: 10,
            bgcolor: "#f7faf2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <SelectedIcon sx={{ fontSize: 40, color: "#004638" }} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyItems: "center",
            rowGap: 2.5,
            mb: 4,
          }}
        >
          {iconList.map(({ name, icon: Icon }) => (
            <IconButton
              key={name}
              onClick={() => setSelectedIconName(name)}
              sx={{
                color: selectedIconName === name ? "#004638" : "white",
              }}
            >
              <Icon sx={{ fontSize: 34 }} />
            </IconButton>
          ))}
        </Box>

        <Button
          fullWidth
          onClick={handleSave}
          sx={{
            width: "72%",
            height: 56,
            mx: "auto",
            display: "block",
            borderRadius: 10,
            bgcolor: "#004638",
            color: "white",
            fontSize: 22,
            fontWeight: 800,
            textTransform: "none",
            "&:hover": { bgcolor: "#00352d" },
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export { iconList };