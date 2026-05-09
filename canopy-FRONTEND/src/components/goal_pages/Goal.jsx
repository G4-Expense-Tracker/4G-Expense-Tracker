import Header from "./Header"
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard/TaskCard";
import { Box, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Savings from "./TaskCard/Savings";
import FooterNav from "../Footer/FooterNav";


//DATABASE CALLS
//these objects are just for ui and to show the shape of the object we want from the db



const goals = [
    {
        id: 1,
        name: "Tuition",
        targetAmount: 200,
        progress: 40,
        level: 1
    },

    {
        id: 2,
        name: "Korea",
        targetAmount: 1500,
        progress: 500,
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
    const [goalData, setGoalData] = useState(goals)
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
    const currentGoal = goalData[currentGoalIndex]

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

    const addSavings = (amount) => {

        //DB CALL HERE

        //OPTIMISTIC UI:
        setGoalData((prevGoals) =>

            prevGoals.map((goal, index) =>

                index === currentGoalIndex
                    /* true = overwrite goal.progress with the added value */
                    ? {
                        ...goal,
                        progress: goal.progress + amount
                    }
                    : goal
            )
        )
    }

    const subtractSavings = (amount) => {

        //DB CALL HERE

        //OPTIMISTIC UI:
        setGoalData((prevGoals) =>

            prevGoals.map((goal, index) =>

                index === currentGoalIndex
                    ? {
                        ...goal,
                        progress: Math.max(
                            0,
                            goal.progress - amount
                        )
                    }
                    : goal
            )
        )
    }


    return (
        <Box>
            <Header
                name={currentGoal.name}
                previousGoal={previousGoal}
                nextGoal={nextGoal}
            />

            {/*  Progress bar and savings */}

            <Savings
                currentSavings={currentGoal.progress}
                targetSavings={currentGoal.targetAmount}
                addSavings={addSavings}
                subtractSavings={subtractSavings}
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