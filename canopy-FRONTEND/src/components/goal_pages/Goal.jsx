import Header from "./Header"
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard/TaskCard";
import { Box, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import FooterNav from "../pages/dashboard/FooterNav";


//DATABASE CALLS
//these objects are just for ui and to show the shape of the object we want from the db

const goals = [
    {
        id: 1,
        name: "Tuition",
        targetAmount: 1000,
        progress: 200,
        level: 1
    },

    {
        id: 2,
        name: "Korea",
        targetAmount: 15000,
        progress: 400,
        level: 2
    }
]

const taskProgress = {
    1: {
        1: 1,
        2: 3,
        3: 0,
        4: 2,
        5: 1
    },

    2: {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 3
    }
}

function Goal() {
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
    const currentGoal = goals[currentGoalIndex]

    const currentGoalProgress =
        taskProgress[currentGoal.id]

    const nextGoal = () => {
        console.log("NEXT CLICKED")
        setCurrentGoalIndex((prevIndex) =>
            prevIndex === goals.length - 1
                ? 0
                : prevIndex + 1
        )
    }

    const previousGoal = () => {
        console.log("PREV CLICKED")

        setCurrentGoalIndex((prevIndex) =>
            prevIndex === 0
                ? goals.length - 1
                : prevIndex - 1
        )
    }


    return (
        <Box>
            <Header
                name={currentGoal.name}
                previousGoal={previousGoal}
                nextGoal={nextGoal}
            />

            <Box
                sx={{
                    display: "flex",
                    padding: "1rem"
                }}>
                <Typography variant="body1" component="h2">
                    {currentGoal.name}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        paddingLeft: "2rem"
                    }}>
                    <Typography variant="body1" component="p">
                        {currentGoal.level}
                    </Typography>

                    <InfoIcon />

                </Box>

            </Box>

            {/* probably pass the tasks completed to this? */}

            <TaskCard
                progress={currentGoalProgress}
                goal={currentGoal}
            />

            <FooterNav />
        </Box>
    )

}

export default Goal