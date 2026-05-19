import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Change from "./Change";
import { getMonthDates } from "../dateHelper"
import { getCategoryTopChanges } from "../../../../api/expenses";

function Top3() {

    const [top3Changes, setTop3Changes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {

            const now = new Date();
            const prevMonth = new Date(now);
            prevMonth.setUTCMonth(prevMonth.getUTCMonth() - 1);

            const current = getMonthDates(now);
            const prev = getMonthDates(prevMonth);

            const data = await getCategoryTopChanges(
                current.firstOfMonth,
                current.lastOfMonth,
                prev.firstOfMonth,
                prev.lastOfMonth
            );

            setTop3Changes(data || []);
            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return (
            <Box>
                <Typography>Loading...</Typography>
            </Box>
        );
    }

    if (top3Changes.length === 0) {
        return (
            <Box>
                <Typography variant="body1">
                    No Data to Show.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: "lightgreen" }}>

            {/* HEADER */}
            <Box sx={{ display: "flex" }}>
                <Typography variant="h2">
                    Top 3 Changes
                </Typography>

                <Typography variant="body1">
                    vs Last Month
                </Typography>
            </Box>

            {/* BODY */}
            <Box sx={{ display: "flex" }}>
                {top3Changes.map((change) => (
                    <Change
                        key={change.category_id}
                        category={change.category_id}
                        percentChange={change.percentChange}
                    />
                ))}
            </Box>

        </Box>
    );
}

export default Top3;