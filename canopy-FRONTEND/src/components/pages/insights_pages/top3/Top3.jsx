import { Box, Typography } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Top3() {
    const top3Changes = [
        {
            category_id: 1
        }

    ]

    const currentMonthStart = "idk"
    const prevMonthEnd = "alsoidk"

    return (

        <Box>
            {/* HEADER */}
            <Box>
                <Typography variant="h2" component="h2">
                    Top 3 Changes
                </Typography>

                <Typography variant="body1" component="p">
                    vs Last Month
                </Typography>
            </Box>

            {/* BODY */}
            <Box>
                {/* change one */}

            </Box>
        </Box>

    )
}

export default Top3