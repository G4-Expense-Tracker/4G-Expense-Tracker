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

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import FooterNav from "../dashboard/FooterNav";

import { useNavigate } from "react-router-dom";

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
      <Box
        sx={{
          bgcolor: "#a8c276",
          px: "20px",
          pt: "18px",
          pb: "28px",
        }}
      >
        {/* STATUS BAR */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "38px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "15px",
              color: "#1d1d1d",
            }}
          >
            9:41
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <SignalCellular4BarIcon sx={{ fontSize: 17 }} />
            <WifiIcon sx={{ fontSize: 17 }} />
            <BatteryFullIcon sx={{ fontSize: 20 }} />
          </Box>
        </Box>

        {/* TOP ROW */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* BACK BUTTON */}
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: "#004638",
              p: 0,
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 28 }} />
          </IconButton>

          {/* TITLE */}
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#004638",
            }}
          >
            Category
          </Typography>

          {/* ADD BUTTON */}
          <IconButton
            sx={{
              color: "#004638",
              p: 0,
            }}
          >
            <AddIcon sx={{ fontSize: 42 }} />
          </IconButton>
        </Box>
      </Box>

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