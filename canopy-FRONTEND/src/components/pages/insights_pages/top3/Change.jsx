import { Box, Typography } from "@mui/material";

function Change({ }) {
    return (
        <Box>

            <Typography variant="h3" component="h3">
                {catagoryName}
            </Typography>

            <Box>
                {/* arrow logic */}
                {isIncrease && (
                    <ArrowUpwardIcon sx={{ color: "yellow", fontSize: 18 }} />
                )}

                {isDecrease && (
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
                    {percentChange.toFixed(1)}%
                </Typography>
            </Box>
        </Box>
    )
}