import { TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  error = false,
  showPassword,
  onTogglePassword,
}) {
  const isPassword = type === "password";

  return (
    <>
      <Typography
        sx={{
          fontSize: 15,
          mb: 1,
          color: error ? "#FF3B30" : "text.primary",
        }}
      >
        {label}
      </Typography>

      <TextField
        fullWidth
        value={value}
        onChange={onChange}
        type={isPassword && !showPassword ? "password" : "text"}
        error={error}
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            height: 50,
            borderRadius: "28px",
            backgroundColor: "#fff",
            "& fieldset": {
              borderColor: error ? "#FF3B30" : "#6FC3A3",
            },
            "&:hover fieldset": {
              borderColor: error ? "#FF3B30" : "#6FC3A3",
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "#FF3B30" : "#6FC3A3",
            },
          },
        }}
        InputProps={
          isPassword
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={onTogglePassword} edge="end">
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </>
  );
}