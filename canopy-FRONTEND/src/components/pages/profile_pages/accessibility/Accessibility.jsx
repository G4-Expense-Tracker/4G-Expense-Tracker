import { Box, Typography } from "@mui/material";
import FooterNav from "../../../Footer/FooterNav.jsx";
import Header from "../Header"
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import SettingsIcon from '@mui/icons-material/Settings';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

function Accessibility() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header title="Accessibility" />

            {/* MENU OPTION LIST */}
            <Box sx={{
                display: "block",
            }}>
                {/* larger text */}
                <Box
                    sx={{
                        display: "flex",
                        padding: "1rem"
                    }}>
                    <FormatSizeIcon />

                    <Typography variant="body1" component="p">
                        Larger Text
                    </Typography>

                    <KeyboardArrowRightIcon />

                </Box>

                {/* Bold Text */}
                <Box
                    sx={{
                        display: "flex",
                        padding: "1rem"
                    }}>
                    <FormatBoldIcon />

                    <Typography variant="body1" component="p">
                        Bold Text
                    </Typography>

                    <KeyboardArrowRightIcon />

                </Box>

                {/* Contrast*/}
                <Box
                    sx={{
                        display: "flex",
                        padding: "1rem"
                    }}>
                    <SettingsIcon />

                    <Typography variant="body1" component="p">
                        Contrast
                    </Typography>

                    <KeyboardArrowRightIcon />

                </Box>

                {/* Text to Speech*/}
                <Box
                    sx={{
                        display: "flex",
                        padding: "1rem"
                    }}>
                    <InterpreterModeIcon />

                    <Typography variant="body1" component="p">
                        Text to Speech
                    </Typography>

                    <KeyboardArrowRightIcon />

                </Box>

            </Box>

            <FooterNav />
        </Box>
    )
}

export default Accessibility