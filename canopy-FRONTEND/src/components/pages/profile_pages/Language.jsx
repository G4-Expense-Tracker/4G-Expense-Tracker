import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FooterNav from "../../Footer/FooterNav";
import Header from "./Header";

function Language() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header title="Language" />

            {/* MENU OPTION LIST */}
            <Box sx={{
                display: "block",
            }}>
                <Box
                    sx={{
                        display: "flex",
                        padding: "1rem"
                    }}>

                    <Typography variant="body1" component="p">
                        Espanol
                    </Typography>

                    <KeyboardArrowRightIcon />

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        padding: "1rem"
                    }}>
                    <Typography variant="body1" component="p">
                        Francais
                    </Typography>

                    <KeyboardArrowRightIcon />

                </Box>

            </Box>

            <FooterNav/>
        </Box>
    )
}

export default Language