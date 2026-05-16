import { Box, Typography } from "@mui/material"

function Weekly() {

    const today = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    })


    return (
        <Box>
            {/* 4 days ago */}
            <Box>
                <Box
                    sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: "yellow"
                    }}
                />
                <Typography variant="body1" component="p">
                    {today}
                </Typography>
            </Box>
        </Box>
    )
}

export default Weekly