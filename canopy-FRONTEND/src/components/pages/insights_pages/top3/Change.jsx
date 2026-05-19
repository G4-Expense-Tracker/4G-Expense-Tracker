import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Change({ category, percentChange }) {

    const isIncrease = percentChange > 0
    const isDecrease = percentChange < 0

    return (
        <Box
        sx={{
            textAlign:"center"
        }}>

            <Typography variant="h3" component="h3">
                {category}
            </Typography>

            <Box>
                {/* arrow logic */}
                {isIncrease && (
                    /* add a rounded border for circle */
                    <ArrowUpwardIcon sx={{ color: "red", fontSize: 18 }} />
                )}

                {isDecrease && (
                    /* add a rounded border for circle */
                    <ArrowDownwardIcon sx={{ color: "green", fontSize: 18 }} />
                )}

                {/* percent */}
                <Typography
                    sx={{
                        color: isIncrease
                            ? "red"
                            : isDecrease
                                ? "green"
                                : "text.primary",
                    }}
                >
                    {percentChange}%
                </Typography>
            </Box>
        </Box>
    )
}

export default Change