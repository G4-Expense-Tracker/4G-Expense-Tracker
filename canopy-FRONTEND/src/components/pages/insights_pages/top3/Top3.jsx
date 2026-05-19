import { Box, Typography } from "@mui/material"
import Change from "./Change";

function Top3() {
    const top3Changes = [
        {
            category_id: "Food",
            current: "curr",
            previous: "prev",
            percentChange: -16
        },
        {
            category_id: "Transportation",
            current: "curr",
            previous: "prev",
            percentChange: -5
        },
        {
            category_id: "Drinks",
            current: "curr",
            previous: "prev",
            percentChange: 12
        }

    ]

    /* DATE HELPER FUNCTION */

    // Source - https://stackoverflow.com/a/76545208
    // Posted by RobG
    // Retrieved 2026-05-19, License - CC BY-SA 4.0

    const getMonthDates = (date = new Date()) => {
        let y = date.getUTCFullYear();
        let m = date.getUTCMonth();

        let firstOfMonth = new Date(Date.UTC(y, m, 1));
        let lastOfMonth = new Date(Date.UTC(y, m + 1, 0));

        return { firstOfMonth, lastOfMonth };
    };

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
                {top3Changes.map((change) => (
                    <Change

                        /* change to name eventually  */

                        key={change.category_id}
                        category={change.category_id}
                        percentChange={change.percentChange}
                    />
                ))}
            </Box>

        </Box>

    )
}

export default Top3