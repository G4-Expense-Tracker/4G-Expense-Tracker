import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

// Imported the FooterNav Component from the dashboard to reuse the same footer navigation across different pages.
import FooterNav from "../../pages/dashboard/FooterNav";

import { useNavigate } from "react-router-dom";
import Header from "../Header";

export default function CategoryPage() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Food",
      icon: <RestaurantIcon />,
    },
    {
      name: "Drink",
      icon: <LocalDrinkIcon />,
    },
    {
      name: "Health",
      icon: <FitnessCenterIcon />,
    },
    {
      name: "Groceries",
      icon: <ShoppingCartOutlinedIcon />,
    },
    {
      name: "Travel",
      icon: <FlightOutlinedIcon />,
    },
    {
      name: "Shopping",
      icon: <ShoppingBagOutlinedIcon />,
    },
    {
      name: "Housing",
      icon: <ApartmentOutlinedIcon />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "390px",
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#f8fbf2",
        position: "relative",
        overflow: "hidden",
        pb: "120px",
      }}
    >
      {/* HEADER */}
      <Header title="Category"></Header>
      

      {/* CONTENT */}
      <Box
        sx={{
          px: "20px",
          pt: "18px",
        }}
      >
        {/* SEARCH LABEL */}
        <Typography
          sx={{
            mb: "10px",
            fontSize: "16px",
            color: "#1d1d1d",
          }}
        >
          Search
        </Typography>

        {/* SEARCH BAR */}
        <TextField
          fullWidth
          placeholder=""
          sx={{
            mb: "30px",

            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              bgcolor: "#fff",
              height: "52px",

              "& fieldset": {
                borderColor: "#9bc59d",
              },

              "&:hover fieldset": {
                borderColor: "#9bc59d",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#9bc59d",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  sx={{
                    color: "#324054",
                    fontSize: 34,
                  }}
                />
              </InputAdornment>
            ),
          }}
        />

        {/* TITLE */}
        <Typography
          sx={{
            mb: "24px",
            fontSize: "18px",
            color: "#1d1d1d",
          }}
        >
          Select categories
        </Typography>

        {/* CATEGORY LIST */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {categories.map((item, index) => (
            <Box
              key={index}
              sx={{
                height: "52px",
                border: "1.5px solid #9bc59d",
                borderRadius: "30px",
                bgcolor: "#fff",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                px: "16px",
              }}
            >
              {/* LEFT SIDE */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    color: "#004638",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#1d1d1d",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>

              {/* DOTS */}
              <MoreHorizIcon
                sx={{
                  color: "#6fa67d",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* FOOTER */}
      <FooterNav />
    </Box>
  );
}