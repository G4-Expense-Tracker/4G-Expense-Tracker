import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        bgcolor: "#c8d99d",
        pt: 1,
        pb: 1,
      }}
    >
      <Box
        onClick={() => navigate("/expense")}
        sx={{
          position: "absolute",
          top: -28,
          left: "50%",
          transform: "translateX(-50%)",
          width: 58,
          height: 58,
          borderRadius: "50%",
          bgcolor: "#fff8cc",
          border: "4px solid #9ab68c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          cursor: "pointer",
        }}
      >
        <AddIcon sx={{ color: "#00503f", fontSize: 34 }} />
      </Box>

      <BottomNavigation showLabels sx={{ bgcolor: "transparent" }}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate("/dashboard")}
          sx={{ color: "#00503f" }}
        />

        <BottomNavigationAction
          label="Expense"
          icon={<BarChartIcon />}
          onClick={() => navigate("/expense")}
          sx={{ color: "#00503f" }}
        />

        <BottomNavigationAction
          label="Goal"
          icon={<EmojiEventsIcon />}
          sx={{ color: "#00503f" }}
        />

        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          sx={{ color: "#00503f" }}
        />
      </BottomNavigation>
    </Box>
  );
}