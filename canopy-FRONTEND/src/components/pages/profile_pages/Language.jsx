import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import FooterNav from "../../Footer/FooterNav";
import Header from "./Header";

function Language() {

    // Ava's code:
    // Header component, FooterNav component,
    // language menu structure and page layout.

    // Tina:
    // Added responsive mobile layout styling,
    // centered the page for browser/mobile view,
    // matched spacing and typography to the Figma design,
    // aligned icons and language rows,
    // and connected back navigation to the Profile page.

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 390,
                minHeight: "100vh",
                mx: "auto",

                // ================= THEME COLORS =================
                bgcolor: "background.default",

                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* ================= HEADER ================= */}
            <Header
                title="Language"
                backPath="/profile"
            />

            {/* ================= LANGUAGE LIST ================= */}
            <Box
                sx={{
                    flexGrow: 1,
                    pt: "70px",
                    px: "34px",
                }}
            >
                {/* ================= ESPANOL ROW ================= */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: "42px",
                        cursor: "pointer",
                    }}
                >
                    {/* LANGUAGE NAME */}
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 700,

                            // ================= THEME COLORS =================
                            color: "text.primary",
                        }}
                    >
                        Espanol
                    </Typography>
                    {/* RIGHT ICON */}
                    <KeyboardArrowRightIcon
                        sx={{
                            color: "primary.main",
                            fontSize: 34,
                        }}
                    />

                </Box>
                {/* ================= FRANCAIS ROW ================= */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",

                        cursor: "pointer",
                    }}
                >
                    {/* LANGUAGE NAME */}
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 700,

                            // ================= THEME COLORS =================
                            color: "text.primary",
                        }}
                    >
                        Francais
                    </Typography>

                    {/* RIGHT ICON */}
                    <KeyboardArrowRightIcon
                        sx={{
                            color: "primary.main",
                            fontSize: 34,
                        }}
                    />
                </Box>
            </Box>

            {/* ================= FOOTER ================= */}
            <FooterNav />

        </Box>
    );
}

export default Language;