import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from '@mui/icons-material/BarChart';

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
        maxWidth: 390,
        zIndex: 100,
      }}
    >
      {/* Floating Add Button */}
      <Box
        onClick={() => navigate("/add-expense")}
        sx={{
          position: "absolute",
          top: "-28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          bgcolor: "text.cream",
          border: "4px solid",
          borderColor: "secondary.main",
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
            color: "primary.main",
            fontSize: 34,
          }}
        />
      </Box>

      {/* Footer Background */}
      <Box
        sx={{
          bgcolor: "secondary.main",
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
          <BottomNavigationAction
            label="Home"
            value="/dashboard"
            icon={<HomeIcon />}
            onClick={() => navigate("/dashboard")}
            sx={{
              color: "primary.main",
            }}
          />

          <BottomNavigationAction
            label="Expense"
            value="/expenses"
            icon={<BarChartRoundedIcon />}
            onClick={() => navigate("/expenses")}
            sx={{
              color: "primary.main",
            }}
          />

          <BottomNavigationAction
            label="Goal"
            value="/goals"
            icon={<EmojiEventsIcon />}
            onClick={() => navigate("/goals")}
            sx={{
              color: "primary.main",
            }}
          />

          <BottomNavigationAction
            label="Profile"
            value="/profile"
            icon={<PersonIcon />}
            onClick={() => navigate("/profile")}
            sx={{
              color: "primary.main",
            }}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}