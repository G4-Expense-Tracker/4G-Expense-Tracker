import { Typography, Box } from "@mui/material";

function OB_Step({ title, image, alt, message }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 8
      }}
    >
      <Typography variant="h4" component="h1">
        {title}
      </Typography>

      <img src={image} alt={alt} style={{ width: "auto", maxHeight: "300px", padding:"2rem" }} />

      <Typography variant="body1" component={"p"}>
        {message}
      </Typography>
    </Box>
  );
}

export default OB_Step;
