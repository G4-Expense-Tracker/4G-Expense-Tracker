import { Box } from "@mui/material"
import Circle from "./Circle"

//completed count = number of times the user has completed this task
//we should talk about how that will work
//im hoping for an object like this:
/* {
    "taskName": "Log an Expense",
    "completedCount": 2,
    "requiredCount": 4
    }   */


// required count = number of times this task must be completed

function TaskCounter({ completedCount, requiredCount }) {

    return (
        <Box sx={{ display: "flex", gap: 1 }}>
            {
                /* this maps over an array of X number of items undefined. map turns those items into circles. */
                Array.from({ length: requiredCount }).map((_, index) => (
                    <Circle
                        key={index}
                        completed={index < completedCount}
                    />
                ))
            }
        </Box>
    )
}

export default TaskCounter