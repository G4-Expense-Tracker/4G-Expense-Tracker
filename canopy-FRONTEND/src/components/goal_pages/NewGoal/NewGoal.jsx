import { Box, Typography } from "@mui/material"
import GoalForm from "./GoalForm"



function NewGoal() {
    return (
        <Box
            sx={{
                display: "block",
                textAlign: "center"
            }}
        >
            <Typography variant="h1" component="h1">
                Set New Goal
            </Typography>

            <Typography variant="body1" component="p">
                Grow from this seed to see your tree
            </Typography>

            <img src="/paintedImgs/seed.png" alt="seed"
                style={{
                    width: "100%",
                    maxWidth: "150px"
                }} />

            <GoalForm />
        </Box>
    )
}

export default NewGoal