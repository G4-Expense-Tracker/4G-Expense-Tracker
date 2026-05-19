import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Change({ data }) {
    return (
        <Box>

            <Typography variant="h3" component="h3">
                {catagoryName}
            </Typography>

            <Box>
                {/* arrow logic */}
                {isIncrease && (
                    /* add a rounded border for circle */
                    <ArrowUpwardIcon sx={{ color: "yellow", fontSize: 18 }} />
                )}

                {isDecrease && (
                    /* add a rounded border for circle */
                    <ArrowDownwardIcon sx={{ color: "green", fontSize: 18 }} />
                )}

                {/* percent */}
                <Typography
                    sx={{
                        color: isIncrease
                            ? "yellow"
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