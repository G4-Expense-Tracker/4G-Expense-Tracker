import {
    Box,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Header({ title }) {
    return (
        <Box
            sx={{
                bgcolor: "#a8c276",
                px: "20px",
                pt: "18px",
                pb: "28px",
            }}
        >

            {/* TOP ROW */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* BACK BUTTON */}
                <IconButton
                    onClick={() => navigate(-1)}
                    sx={{
                        color: "#004638",
                        p: 0,
                    }}
                >
                    <ArrowBackIosNewIcon sx={{ fontSize: 28 }} />
                </IconButton>

                {/* TITLE */}
                <Typography
                    sx={{
                        fontSize: "32px",
                        fontWeight: 800,
                        color: "#004638",
                    }}
                >
                    {title}
                </Typography>

                {/* ADD BUTTON */}
                {/* we may actually remove this if we do not allow the user to add a new category! */}
                <IconButton
                    sx={{
                        color: "#004638",
                        p: 0,
                    }}
                >
                    <AddIcon sx={{ fontSize: 42 }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Header