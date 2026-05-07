import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function AddCategoryPage() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 390,
                minHeight: "100svh",
                maxHeight: "100svh",
                mx: "auto",
                bgcolor: "#f8fbf2",
                position: "relative",
                overflow: "hidden",
                pb: "120px",
            }}
            >
                {/* HEADER */}
                <Box
                    sx={{
                        bgcolor: "#a8c276",
                        px: "20px",
                        pt: "18px",
                        pb: "28px",
                    }}
                    >
                {/* STATUS BAR */}
                    <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                mb: "38px",
                            }}
                            ></Box>
                                <IconButton 
                                    onClick={() => navigate("/category")}
                                ></IconButton>
                                <Typography
                                    sx={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#1d1d1d",
                                    }}
                                    >
                                        Add Category
                                    </Typography>
                                    <Box sx={{ width: 24}} ></Box>
                            </Box>
                            </Box>
    );
}