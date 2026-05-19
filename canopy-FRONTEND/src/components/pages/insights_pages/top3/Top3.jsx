import { Box, Typography } from "@mui/material"
import Change from "./Change";

function Top3() {
    const top3Changes = [
        {
            category_id: row.category_id,
            current: curr,
            previous: prev,
            percentChange,
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
            <Change data={top3Changes} />

        </Box>

    )
}

export default Top3