import { Box, Typography } from "@mui/material"
import TaskCounter from "./TaskCounter"
import { TASKS } from "./tasks"

function TaskCard({ progress, goal }) {

    const level = goal.level
    //this isn't what they have in the mock up, but idk a cleaner way to do it...
    const requiredCount = level + 1

    return (
        <Box>

            {/* do we implement the week number? */}

            {TASKS.map((task) => {

                /* determines # of times a task was completed */
                const completedCount = progress?.[task.id] || 0;

                return (
                    <Box
                        key={task.id}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.5rem 1rem"
                        }}
                    >

                        {/* task name */}
                        <Typography variant="body1">
                            {task.name}
                        </Typography>

                        {/* circles */}
                        <TaskCounter
                            completedCount={completedCount}
                            requiredCount={requiredCount}
                        />

                    </Box>
                );
            })}

        </Box>
    )
}

export default TaskCard