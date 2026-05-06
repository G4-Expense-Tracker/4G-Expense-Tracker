import { Box, Typography, IconButton, LinearProgress, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddIcon from "@mui/icons-material/Add";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "#fbfff5",
        position: "relative",
        overflow: "hidden",
        pb: 9,
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
          mb: 4,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>9:41</Typography>
        <Box sx={{ display: "flex", gap: 0.3 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 14 }} />
          <WifiIcon sx={{ fontSize: 14 }} />
          <BatteryFullIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      {/* Greeting */}
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Georgia, serif",
          fontSize: 20,
          fontWeight: 700,
          mb: 3,
        }}
      >
        Good Morning, Hye
      </Typography>

      {/* Tree Goal Circle */}
      <Box
        sx={{
          position: "relative",
          width: 240,
          height: 240,
          mx: "auto",
          mb: 5,
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            left: -20,
            top: "45%",
            color: "#168c6c",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          sx={{
            width: 220,
            height: 220,
            mx: "auto",
            border: "14px solid #ffdb57",
            borderRadius: "50%",
            bgcolor: "#fff8cc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: 48 }}>🌱</Typography>
          <Typography sx={{ fontWeight: 800, color: "#00503f" }}>
            Click here
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
            to set your goal
          </Typography>
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            right: -20,
            top: "45%",
            color: "#168c6c",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Budget Card */}
      <Paper
        elevation={3}
        sx={{
          width: "82%",
          mx: "auto",
          bgcolor: "#dcf5bf",
          borderRadius: 2,
          p: 2,
          mb: 2,
        }}
      >
        <Typography sx={{ fontWeight: 800, color: "#00503f" }}>
          Daily Budget
        </Typography>

        <Typography sx={{ fontSize: 28, fontWeight: 900, color: "#00503f" }}>
          $50
        </Typography>

        <LinearProgress
          variant="determinate"
          value={85}
          sx={{
            height: 10,
            borderRadius: 10,
            my: 1.5,
            bgcolor: "#b8d99a",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#00503f",
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontSize: 12, fontWeight: 700 }}>Used</Typography>
            <Typography sx={{ fontSize: 13, fontWeight: 800 }}>$45</Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
              Remaining
            </Typography>
            <Typography sx={{ fontSize: 13, fontWeight: 800 }}>$5</Typography>
          </Box>
        </Box>
      </Paper>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 3 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#00503f" }} />
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#8bab68" }} />
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#8bab68" }} />
      </Box>

      {/* Bottom Nav */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 70,
          bgcolor: "#a8c77d",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <NavItem icon={<HomeIcon />} label="Home" />
        <NavItem icon={<BarChartIcon />} label="Expense" />

        <IconButton
          sx={{
            width: 58,
            height: 58,
            bgcolor: "#fff8cc",
            border: "4px solid #9abb6b",
            mt: -4,
            "&:hover": { bgcolor: "#fff8cc" },
          }}
        >
          <AddIcon sx={{ color: "#00503f", fontSize: 32 }} />
        </IconButton>

        <NavItem icon={<EmojiEventsIcon />} label="Goal" />
        <NavItem icon={<PersonIcon />} label="Profile" />
      </Box>
    </Box>
  );
}

function NavItem({ icon, label }) {
  return (
    <Box sx={{ textAlign: "center", color: "#00503f" }}>
      <Box sx={{ fontSize: 20 }}>{icon}</Box>
      <Typography sx={{ fontSize: 10 }}>{label}</Typography>
    </Box>
  );
}