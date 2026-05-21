import {
  Box,
  Typography,
  Switch
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { useState } from "react";

function ListItem({ notification }) {

  // Ava's code:
  // Notification list item structure and switch functionality.

  // Tina:
  // Added larger mobile card styling,
  // spacing, rounded container,
  // and updated the design to match the Figma mockup.

  const [enabled, setEnabled] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        height: 64,
        bgcolor: "background.lightGreen",
        borderRadius: "32px",
        display: "flex",
        alignItems: "center",
        px: "20px",
      }}
    >

      {/* LEFT SIDE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexGrow: 1,
        }}
      >

        <InfoOutlinedIcon
          sx={{
            color: "primary.main",
            fontSize: 30,
          }}
        />

        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: "primary.main",
          }}
        >
          {notification}
        </Typography>

      </Box>

      {/* SWITCH */}
      <Switch
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "primary.contrastText",
          },

          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            bgcolor: "primary.main",
            opacity: 1,
          },

          "& .MuiSwitch-track": {
            bgcolor: "secondary.main",
            opacity: 1,
          },
        }}
      />

    </Box>
  );
}

export default ListItem;