import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate, useLocation } from "react-router-dom";

export default function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "390px",
        zIndex: 100,
      }}
    >
      {/* Floating Add Button */}
      <Box
        onClick={() => navigate("/expense")}
        sx={{
          position: "absolute",
          top: "-28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          bgcolor: "#fff8cc",
          border: "4px solid #9ab68c",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          cursor: "pointer",
          zIndex: 10,

          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <AddIcon
          sx={{
            color: "#00503f",
            fontSize: 34,
          }}
        />
      </Box>

      {/* Footer Background */}
      <Box
        sx={{
          bgcolor: "#c8d99d",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",

          pt: 1,
          pb: 1,

          boxShadow: "0px -3px 10px rgba(0,0,0,0.08)",
        }}
      >
        <BottomNavigation
          value={location.pathname}
          showLabels
          sx={{
            bgcolor: "transparent",
          }}
        >
          {/* HOME */}
          <BottomNavigationAction
            label="Home"
            value="/dashboard"
            icon={<HomeIcon />}
            onClick={() => navigate("/dashboard")}
            sx={{
              color: "#00503f",
            }}
          />

          {/* EXPENSE */}
          <BottomNavigationAction
            label="Expense"
            value="/expense"
            icon={<BarChartIcon />}
            onClick={() => navigate("/expense")}
            sx={{
              color: "#00503f",
            }}
          />

          {/* GOAL */}
          <BottomNavigationAction
            label="Goal"
            value="/goal"
            icon={<EmojiEventsIcon />}
            onClick={() => navigate("/goal")}
            sx={{
              color: "#00503f",
            }}
          />

          {/* PROFILE */}
          <BottomNavigationAction
            label="Profile"
            value="/profile"
            icon={<PersonIcon />}
            onClick={() => navigate("/profile")}
            sx={{
              color: "#00503f",
            }}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}