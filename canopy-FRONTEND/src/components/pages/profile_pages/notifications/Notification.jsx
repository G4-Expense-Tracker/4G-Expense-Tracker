import { Box } from "@mui/material";

import Header from "../Header";
import FooterNav from "../../../Footer/FooterNav.jsx";
import ListItem from "./listItem";

function Notification() {

  // Ava's code:
  // Notification page structure,
  // Header component,
  // FooterNav component,
  // and notification array mapping.

  // Tina:
  // Added mobile responsive layout styling,
  // centered the page to match the Figma design,
  // used MUI theme colors instead of hardcoded colors,
  // removed status bar icons,
  // and connected back navigation to Profile page.

  const notifs = [
    "Spending Alert",
    "Daily Check-In",
    "Goal Progress",
    "Insight Updates",
    "Tree Growth",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        minHeight: "100svh",
        mx: "auto",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* HEADER */}
      <Header
        title="Notifications"
        backPath="/profile"
      />

      {/* CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          pt: "24px",
          px: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >

        {notifs.map((notif, index) => (
          <ListItem
            key={index}
            notification={notif}
          />
        ))}

      </Box>

      {/* FOOTER */}
      <FooterNav />

    </Box>
  );
}

export default Notification;