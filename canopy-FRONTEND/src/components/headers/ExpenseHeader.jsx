import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function ExpenseHeader() {
    const tabs = [
        {
            label: "Expense",
            path: "/expenses",
        },
        {
            label: "Insight",
            path: "/insights",
        },
    ];

    return (
        <Box>
            {/* Tabs */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: { xs: "28px", sm: "35px" },
                    mb: "28px",
                }}
            >
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        {({ isActive }) => (
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "24px", sm: "26px" },
                                        fontWeight: 700,
                                        color: isActive
                                            ? "#004B3B"
                                            : "#91AE5F",
                                    }}
                                >
                                    {tab.label}
                                </Typography>

                                <Box
                                    sx={{
                                        width: { xs: 130, sm: 145 },
                                        height: 5,
                                        borderRadius: "10px",
                                        backgroundColor: isActive
                                            ? "#A7C26E"
                                            : "transparent",
                                        mt: "12px",
                                        transition: "0.2s ease",
                                    }}
                                />
                            </Box>
                        )}
                    </NavLink>
                ))}
            </Box>
        </Box>
    );
}

export default ExpenseHeader;