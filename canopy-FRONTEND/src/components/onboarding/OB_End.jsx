import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import logo from "/Logos/Logo_Green.png"
import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material";


function OB_End({ onBack }) {

    return (
        <div style={{ height: "100vh", position: "relative" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: 6,
                    px: 2,
                }}
            >
                <ArrowBackIosIcon onClick={onBack} />
            </Box>

            <img src={logo} alt="Canopy Logo" style={{ width: "auto", maxHeight: "100px", paddingBottom: "2rem", paddingTop: "6rem" }} />

            <Typography variant="h2" component="h2">Welcome to</Typography>
            <Typography variant="h2" component="h1" sx={{ pb: "2rem" }}>The Canopy</Typography>

            <Typography variant="body1" component="p">Your Financial Freedom begins today!</Typography>

            <Button onClick={() => navigate("/dashboard")} variant="contained" sx={{ mt: "6rem" }}>Start</Button>


        </div>
    )
}

export default OB_End