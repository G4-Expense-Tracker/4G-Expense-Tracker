import { Box, Typography } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';
import { viewBudget } from "../../../api/budgets";
import { getAllExpenses, getDateRangeTotal } from "../../../api/expenses";
import { getMonthDates } from "./dateHelper";

function Monthly() {

    const budget = viewBudget("monthly") //budget left
    const spent = getDateRangeTotal() //budget spent

    /* Dates */
    const now = new Date();
    const prevMonth = new Date(now);
    prevMonth.setUTCMonth(prevMonth.getUTCMonth() - 1);
    const current = getMonthDates(now);
    const prev = getMonthDates(prevMonth);


    /* dates to pass to db function */
    const currentMonthStart = current.firstOfMonth
    const currentMonthEnd = current.lastOfMonth
    const prevMonthStart = prev.firstOfMonth
    const prevMonthEnd = prev.lastOfMonth


    return (
        <Box>
            {/* progress bar and money left */}
            <Box>
                {/* progress bar like goal page */}

                <Box
                    sx={{
                        display: "flex"
                    }}>

                    <Box sx={{ mb: 2 }}>
                        <LinearProgress
                            variant="determinate"
                            value={percentUsed}
                        />
                    </Box>

                    <Box>
                        <Typography variant="body1" component="p">
                            Used
                        </Typography>
                        <Typography variant="h3" component="p">
                            {moneyUsed}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="p">
                            Remaining
                        </Typography>
                        <Typography variant="h3" component="p">
                            {moneyRemaining}
                        </Typography>
                    </Box>

                </Box>
            </Box>

            {/* percent available */}
            <Box>
                <Typography variant="h2" component="h2">
                    {percentAvailable}
                </Typography>

                <Typography variant="body1" component="p">
                    Available
                </Typography>
            </Box>
        </Box>
    )
}

export default Monthly