import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Box, Button } from "@mui/material";

function OB_Footer({ step, totalSteps, onNext }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* progress dots */}
      <Box sx={{ display: "flex", gap: 1 }}>
        {[...Array(totalSteps)].map((_, index) =>
          index === step ? (
            <CircleIcon key={index} fontSize="small" />
          ) : (
            <CircleOutlinedIcon key={index} fontSize="small" />
          )
        )}
      </Box>

      {/* continue button */}
      <Button variant="contained" onClick={onNext}>
        Continue
      </Button>
    </Box>
  );
}

export default OB_Footer;