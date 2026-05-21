import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

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

import FooterNav from "../../../Footer/FooterNav.jsx";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

// This list stores the icon name and actual MUI icon
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

  // ================= THEME =================
  const theme = useTheme();

  // Reads the editIndex from the URL
  const [searchParams] = useSearchParams();
  const editIndex = searchParams.get("editIndex");

  // Checks if page is being used for editing or adding
  const isEditMode = editIndex !== null;

  // Category name input state
  const [categoryName, setCategoryName] =
    useState("");

  // Selected icon state
  const [selectedIconName, setSelectedIconName] =
    useState("heart");

  // Find the selected icon component
  const SelectedIcon =
    iconList.find(
      (item) => item.name === selectedIconName
    )?.icon || FavoriteBorderIcon;

  // If editing, load the old category name and icon
  useEffect(() => {
    if (isEditMode) {
      const savedCategories =
        JSON.parse(
          localStorage.getItem(
            "customCategories"
          )
        ) || [];

      const categoryToEdit =
        savedCategories[Number(editIndex)];

      if (categoryToEdit) {
        setCategoryName(categoryToEdit.title);
        setSelectedIconName(
          categoryToEdit.iconName
        );
      }
    }
  }, [editIndex, isEditMode]);

  // Save new category OR update existing category
  function handleSave() {
    if (!categoryName.trim()) {
      alert("Please enter a category name.");
      return;
    }

    const savedCategories =
      JSON.parse(
        localStorage.getItem(
          "customCategories"
        )
      ) || [];

    const updatedCategory = {
      id: isEditMode
        ? savedCategories[Number(editIndex)].id
        : Date.now(),

      title: categoryName.trim(),

      iconName: selectedIconName,
    };

    let updatedCategories;

    if (isEditMode) {
      updatedCategories = savedCategories.map(
        (category, index) =>
          index === Number(editIndex)
            ? updatedCategory
            : category
      );
    } else {
      updatedCategories = [
        ...savedCategories,
        updatedCategory,
      ];
    }

    localStorage.setItem(
      "customCategories",
      JSON.stringify(updatedCategories)
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

        // ================= MUI THEME =================
        bgcolor: "secondary.main",

        position: "relative",

        overflowX: "hidden",

        pb: "86px",
      }}
    >
      {/* ================= BACK BUTTON ================= */}
      <IconButton
        onClick={() => navigate("/category")}
        sx={{
          position: "absolute",

          top: 72,
          left: 18,

          // ================= MUI THEME =================
          color: "primary.dark",

          zIndex: 5,
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      {/* ================= MAIN PANEL ================= */}
      <Box
        sx={{
          mt: 10,

          minHeight:
            "calc(100svh - 96px)",

          borderTopLeftRadius: 38,
          borderTopRightRadius: 38,

          px: 3,
          pt: 6,
          pb: 5,

          // ================= MUI THEME =================
          background: `linear-gradient(
            180deg,
            ${theme.palette.background.green} 0%,
            ${theme.palette.secondary.main} 100%
          )`,
        }}
      >
        {/* ================= PAGE TITLE ================= */}
        <Typography
          sx={{
            color:
              "primary.contrastText",

            fontSize: 38,
            fontWeight: 800,

            textAlign: "center",

            mb: 4,
          }}
        >
          {isEditMode
            ? "Edit Category"
            : "Add Category"}
        </Typography>

        {/* ================= CATEGORY INPUT ================= */}
        <TextField
          fullWidth
          value={categoryName}
          onChange={(e) =>
            setCategoryName(e.target.value)
          }
          placeholder="Category name"
          sx={{
            mb: 3,

            "& .MuiOutlinedInput-root": {
              height: 58,

              borderRadius: 10,

              // ================= MUI THEME =================
              bgcolor:
                "background.default",

              "& fieldset": {
                border: "none",
              },
            },
          }}
        />

        {/* ================= ICON TITLE ================= */}
        <Typography
          sx={{
            color:
              "primary.contrastText",

            fontSize: 18,

            mb: 1.5,
          }}
        >
          Icons
        </Typography>

        {/* ================= SELECTED ICON PREVIEW ================= */}
        <Box
          sx={{
            height: 58,

            borderRadius: 10,

            // ================= MUI THEME =================
            bgcolor:
              "background.default",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            mb: 3,
          }}
        >
          <SelectedIcon
            sx={{
              fontSize: 40,

              // ================= MUI THEME =================
              color: "primary.main",
            }}
          />
        </Box>

        {/* ================= ICON GRID ================= */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
              "repeat(4, 1fr)",

            justifyItems: "center",

            rowGap: 2.5,

            mb: 4,
          }}
        >
          {iconList.map(
            ({ name, icon: Icon }) => (
              <IconButton
                key={name}
                onClick={() =>
                  setSelectedIconName(name)
                }
                sx={{
                  color:
                    selectedIconName === name
                      ? "primary.main"
                      : "primary.contrastText",
                }}
              >
                <Icon
                  sx={{
                    fontSize: 34,
                  }}
                />
              </IconButton>
            )
          )}
        </Box>

        {/* ================= SAVE BUTTON ================= */}
        <Button
          fullWidth
          onClick={handleSave}
          sx={{
            width: "72%",

            height: 56,

            mx: "auto",

            display: "block",

            borderRadius: 10,

            // ================= MUI THEME =================
            bgcolor: "primary.main",

            color:
              "primary.contrastText",

            fontSize: 22,
            fontWeight: 800,

            textTransform: "none",

            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {isEditMode
            ? "Update"
            : "Save"}
        </Button>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box
        sx={{
          position: "fixed",

          bottom: 0,
          left: "50%",

          transform:
            "translateX(-50%)",

          width: "100%",
          maxWidth: 390,

          zIndex: 20,
        }}
      >
        <FooterNav />
      </Box>
    </Box>
  );
}

export { iconList };