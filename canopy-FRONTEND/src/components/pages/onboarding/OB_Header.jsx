import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function OB_Header({onSkip, onBack}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: 6,
        px: 2,
      }}
    >
      <ArrowBackIosIcon onClick={ onBack }/>

      <Typography variant="body2" onClick={onSkip}>Skip</Typography>
    </Box>
  );
}

export default OB_Header;
