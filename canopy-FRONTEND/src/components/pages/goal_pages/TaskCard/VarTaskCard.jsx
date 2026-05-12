import { Box, Typography } from "@mui/material"

function VarTaskCard({ message }){
    return (
        <Box>
            <Typography variant="body1" component="p">
                {message}
            </Typography>
        </Box>
    )
}

export default VarTaskCard