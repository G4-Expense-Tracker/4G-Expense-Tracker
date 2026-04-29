import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function OB_Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // 👈 spreads items
        alignItems: "center",
        pt: 6,
        px: 2,
      }}
    >
      <ArrowBackIosIcon />

      <Typography variant="body2">Skip</Typography>
    </Box>
  );
}

export default OB_Header;
