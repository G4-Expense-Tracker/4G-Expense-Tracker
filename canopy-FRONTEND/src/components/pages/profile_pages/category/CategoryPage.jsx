import { useEffect, useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";

import {
  SignalCellular4Bar,
  Wifi,
  BatteryFull,
  ArrowBackIosNew,
  Add,
  MoreHoriz,
  Home,
  BarChart,
  EmojiEvents,
  Person,
} from "@mui/icons-material";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlightIcon from "@mui/icons-material/Flight";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FooterNav from "../../Footer/FooterNav";

import { useNavigate } from "react-router-dom";
import { iconList } from "./AddCategoryPage";

export default function CategoryPage() {
  const navigate = useNavigate();

  // This tracks which category row is showing edit/delete buttons
  const [activeMenu, setActiveMenu] = useState(null);

  // This stores the categories created by the user
  const [customCategories, setCustomCategories] = useState([]);

  // Load saved custom categories from localStorage when the page opens
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("customCategories")) || [];
    setCustomCategories(saved);
  }, []);

  // These are fixed default categories
  const defaultCategories = [
    { title: "Food", icon: RestaurantIcon },
    { title: "Drink", icon: LocalDrinkIcon },
    { title: "Health", icon: FitnessCenterIcon },
    { title: "Groceries", icon: ShoppingCartIcon },
    { title: "Travel", icon: FlightIcon },
    { title: "Shopping", icon: ShoppingBagIcon },
    { title: "Housing", icon: ApartmentIcon },
  ];

  // Edit only custom categories
  function handleEdit(indexToEdit) {
    const customIndex = indexToEdit - defaultCategories.length;

    if (customIndex < 0) {
      alert("Default categories cannot be edited.");
      setActiveMenu(null);
      return;
    }

    navigate(`/add-category?editIndex=${customIndex}`);
  }

  // Delete only custom categories
  function handleDelete(indexToDelete) {
    const customIndex = indexToDelete - defaultCategories.length;

    if (customIndex < 0) {
      alert("Default categories cannot be deleted.");
      setActiveMenu(null);
      return;
    }

    const updatedCategories = customCategories.filter(
      (_, index) => index !== customIndex
    );

    setCustomCategories(updatedCategories);
    localStorage.setItem("customCategories", JSON.stringify(updatedCategories));
    setActiveMenu(null);
  }

  // Convert saved icon names back into actual MUI icons
  const savedCategories = customCategories.map((category) => {
    const matchedIcon =
      iconList.find((item) => item.name === category.iconName)?.icon ||
      RestaurantIcon;

    return {
      title: category.title,
      icon: matchedIcon,
    };
  });

  // Combine default categories with user-created categories
  const categories = [...defaultCategories, ...savedCategories];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#f8fbf2",
        position: "relative",
        overflowX: "hidden",
        pb: 13,
      }}
    >
      {/* Header */}
      <Box sx={{ bgcolor: "#a9c57b", px: 3, pt: 2, pb: 5 }}>
        {/* Status bar */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
          <Typography sx={{ fontWeight: 700 }}>9:41</Typography>

          <Box sx={{ display: "flex", gap: 0.5 }}>
            <SignalCellular4Bar sx={{ fontSize: 16 }} />
            <Wifi sx={{ fontSize: 16 }} />
            <BatteryFull sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Header row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            onClick={() => navigate("/expense")}
            sx={{ color: "#004638" }}
          >
            <ArrowBackIosNew sx={{ fontSize: 30 }} />
          </IconButton>

          <Typography
            sx={{
              fontSize: 40,
              fontWeight: 800,
              color: "#004638",
            }}
          >
            Category
          </Typography>

          <IconButton
            onClick={() => navigate("/add-category")}
            sx={{ color: "#004638" }}
          >
            <Add sx={{ fontSize: 42 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Main content */}
      <Box sx={{ px: 2.5, pt: 4 }}>
        <Typography sx={{ fontSize: 18, mb: 2 }}>Search</Typography>

        <TextField
          fullWidth
          sx={{
            mb: 5,
            "& .MuiOutlinedInput-root": {
              height: 54,
              borderRadius: 10,
              bgcolor: "white",
              "& fieldset": { borderColor: "#97c596" },
            },
          }}
        />

        <Typography sx={{ fontSize: 18, mb: 3 }}>Select categories</Typography>

        {/* Category list */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Box
                key={index}
                sx={{
                  minHeight: 74,
                  borderRadius: 10,
                  bgcolor: "white",
                  border: "1px solid #97c596",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Left side: icon and category name */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Icon sx={{ color: "#004638" }} />
                  <Typography sx={{ fontSize: 18 }}>{category.title}</Typography>
                </Box>

                {/* Right side: three dots OR edit/delete buttons */}
                {activeMenu === index ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton onClick={() => handleEdit(index)}>
                      <EditIcon sx={{ color: "#004638", fontSize: 26 }} />
                    </IconButton>

                    <Box sx={{ width: "1px", height: 32, bgcolor: "#aaa" }} />

                    <IconButton onClick={() => handleDelete(index)}>
                      <DeleteIcon sx={{ color: "#004638", fontSize: 28 }} />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton onClick={() => setActiveMenu(index)}>
                    <MoreHoriz sx={{ color: "#7ab07b", fontSize: 30 }} />
                  </IconButton>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Footer navigate={navigate} />
    </Box>
  );
}

/* Footer navigation */
function Footer({ navigate }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 390,
        height: 92,
        bgcolor: "#c7d99d",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 20,
      }}
    >
      <NavItem icon={<Home />} label="Home" onClick={() => navigate("/dashboard")} />
      <NavItem icon={<BarChart />} label="Expense" onClick={() => navigate("/expense")} />

      <Box
        onClick={() => navigate("/expense")}
        sx={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          bgcolor: "#fff7cc",
          border: "5px solid #9ab68c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -6,
          cursor: "pointer",
        }}
      >
        <Add sx={{ fontSize: 42, color: "#004638" }} />
      </Box>

      <NavItem icon={<EmojiEvents />} label="Goal" />
      <NavItem icon={<Person />} label="Profile" />
    </Box>
  );
}

function NavItem({ icon, label, onClick }) {
  return (
    <Box onClick={onClick} sx={{ textAlign: "center", color: "#004638", cursor: "pointer" }}>
      {icon}
      <Typography sx={{ fontSize: 13 }}>{label}</Typography>
    </Box>
  );
}