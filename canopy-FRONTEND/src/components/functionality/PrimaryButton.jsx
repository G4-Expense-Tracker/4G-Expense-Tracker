import { Button } from "@mui/material";

export default function PrimaryButton({ children, onClick }) {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{
        height: 55,
        borderRadius: "30px",
        fontSize: 18,
        fontWeight: 700,
        textTransform: "none",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
    >
      {children}
    </Button>
  );
}