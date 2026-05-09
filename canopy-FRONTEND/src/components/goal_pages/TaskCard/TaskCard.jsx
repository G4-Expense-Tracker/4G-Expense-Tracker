import { Box, Typography } from "@mui/material"
import TaskCounter from "./TaskCounter"

function TaskCard() {

    //db call
    const weekNumber = 2

    return (
        <Box>
            {/* week number */}
            <Box>
                <Typography variant="body1" component="p">
                    Week {weekNumber}
                </Typography>
            </Box>

            {/* weekly task list */}
            <Box>
                <Box>
                    <Typography variant="body1" component="p">
                        Login to Canopy
                    </Typography>

                    {/*  VALUES ARE HARDCODED FOR NOW */}
                    <TaskCounter
                        completedCount={1}
                        requiredCount={3}
                    />

                </Box>

                <Box>
                    <Typography variant="body1" component="p">
                        Log an Expense
                    </Typography>

                    <TaskCounter
                        completedCount={2}
                        requiredCount={3}
                    />

                </Box>

                <Box>
                    <Typography variant="body1" component="p">
                        Add to Your Savings
                    </Typography>

                    <TaskCounter
                        completedCount={1}
                        requiredCount={2}
                    />

                </Box>

                <Box>
                    <Typography variant="body1" component="p">
                        Set or Adjust Daily Buget
                    </Typography>

                    <TaskCounter
                        completedCount={0}
                        requiredCount={2}
                    />

                </Box>

                <Box>
                    <Typography variant="body1" component="p">
                        Spend within Daily Budget
                    </Typography>

                    <TaskCounter
                        completedCount={0}
                        requiredCount={2}
                    />

                </Box>

            </Box>
        </Box>
    )
}

export default TaskCard