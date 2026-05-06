import {
  Box,
  Typography,
  IconButton,
  LinearProgress,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "390px",
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#f8fbf2",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          9:41
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 0.5,
          }}
        >
          <SignalCellular4BarIcon sx={{ fontSize: 16 }} />
          <WifiIcon sx={{ fontSize: 16 }} />
          <BatteryFullIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* Greeting */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 3,
          fontWeight: 700,
          fontSize: 28,
          fontFamily: "Georgia, serif",
        }}
      >
        Good Morning, Hye
      </Typography>

      {/* Goal Section */}
      <Box
        sx={{
          mt: 3,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left Arrow */}
        <IconButton
          sx={{
            position: "absolute",
            left: 18,
            color: "#198754",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Goal Circle */}
        <Box
          sx={{
            width: 220,
            height: 220,
            border: "14px solid #ffdb57",
            borderRightColor: "#00503f",
            borderRadius: "50%",
            bgcolor: "#fff8cc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: 52 }}>
            🌲
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#00503f",
              fontSize: 24,
            }}
          >
            Korea
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            $1500 / 1800
          </Typography>
        </Box>

        {/* Right Arrow */}
        <IconButton
          sx={{
            position: "absolute",
            right: 18,
            color: "#198754",
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* Progress Bubble */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 48,
            width: 38,
            height: 38,
            borderRadius: "50%",
            bgcolor: "#00503f",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          83%
        </Box>
      </Box>

      {/* Budget Card */}
      <Box
        sx={{
          mx: 2.5,
          mt: 4,
          p: 2.5,
          borderRadius: 4,
          bgcolor: "#dff0bf",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        <Typography
          sx={{
            color: "#00503f",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Daily Budget
        </Typography>

        <Typography
          sx={{
            fontWeight: 800,
            fontSize: 34,
            lineHeight: 1,
            mt: 1,
          }}
        >
          $50
        </Typography>

        <LinearProgress
          variant="determinate"
          value={90}
          sx={{
            mt: 2,
            height: 12,
            borderRadius: 10,
            bgcolor: "#d8d8d8",

            "& .MuiLinearProgress-bar": {
              bgcolor: "#00503f",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 12 }}>
              Used
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                color: "#00503f",
              }}
            >
              $45
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: 12 }}>
              Remaining
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                color: "#00503f",
              }}
            >
              $5
            </Typography>
          </Box>
        </Box>

        {/* Slider Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 2,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#00503f",
            }}
          />

          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#9ab68c",
            }}
          />

          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#9ab68c",
            }}
          />
        </Box>
      </Box>

      {/* Bottom Navigation */}
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
        {/* Floating Add Button */}
        <Box
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
          }}
        >
          <AddIcon
            sx={{
              color: "#00503f",
              fontSize: 34,
            }}
          />
        </Box>

        <BottomNavigation
          showLabels
          sx={{
            bgcolor: "transparent",
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            sx={{ color: "#00503f" }}
          />

          <BottomNavigationAction
            label="Expense"
            icon={<BarChartIcon />}
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
    </Box>
  );
}