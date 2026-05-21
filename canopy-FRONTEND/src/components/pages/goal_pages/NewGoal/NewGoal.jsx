import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import GoalForm from "./GoalForm"
import FooterNav from "../../../Footer/FooterNav"

// This part is Ava's code.
// Tina: added FooterNav and page styling to match the design.
function NewGoal() {
    const navigate = useNavigate()

    // Ava's code
    return (
        <Box
            sx={{
                minHeight: "100vh",
                position: "relative",
                pb: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }}
        >
            <Typography variant="h1" component="h1">
                Set New Goal
            </Typography>

            <Typography variant="body1" component="p">
                Grow from this seed to see your tree
            </Typography>

            <img
                src="/paintedImgs/seed.png"
                alt="seed"
                style={{
                    width: "100%",
                    maxWidth: "150px"
                }}
            />

            <GoalForm />

            <FooterNav />
        </Box>
    )
}

export default NewGoal