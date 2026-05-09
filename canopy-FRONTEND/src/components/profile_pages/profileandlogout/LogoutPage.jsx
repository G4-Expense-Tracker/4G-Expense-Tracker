import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        height: "100vh",
        mx: "auto",
        position: "relative",
        bgcolor: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* LOGOUT POPUP */}
      <Box
        sx={{
          width: 300,
          height: 260,
          borderRadius: "10px",
          background:
            "linear-gradient(180deg, #1E9A77 0%, #A8BF7E 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "24px",
        }}
      >
        {/* EXCLAMATION ICON */}
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "#FFFFFF",
            color: "#1E9A77",
            fontSize: 28,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "26px",
          }}
        >
          !
        </Box>

        {/* MESSAGE */}
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: 26,
            lineHeight: 1.3,
            textAlign: "center",
            mb: "34px",
          }}
        >
          Are you sure
          <br />
          you want to log out?
        </Typography>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            gap: "22px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* LOG OUT BUTTON */}
          <Button
            onClick={() => navigate("/main")}
            sx={{
              width: 138,
              height: 58,
              borderRadius: "32px",
              bgcolor: "#005844",
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 800,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                bgcolor: "#004333",
                boxShadow: "none",
              },
            }}
          >
            Log Out
          </Button>

          {/* CANCEL BUTTON */}
          <Button
            onClick={() => navigate("/profile")}
            sx={{
              width: 138,
              height: 58,
              borderRadius: "32px",
              border: "2px solid #FFFFFF",
              bgcolor: "rgba(255,255,255,0.18)",
              color: "#005844",
              fontSize: 20,
              fontWeight: 800,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                bgcolor: "rgba(255,255,255,0.28)",
                boxShadow: "none",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}