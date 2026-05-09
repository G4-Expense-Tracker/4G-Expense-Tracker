import Header from "./Header"
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard/TaskCard";
import { Box, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import FooterNav from "../pages/dashboard/FooterNav";


//DATABSE CALL TO GET ALL GOALS
//const goals = database call
const goals = [
    {
        name: "Tuition",
        targetAmount: 1000,
        progress: 0,
        level: 1
    },
    {
        name: "Korea",
        targetAmount: 15000,
        progress: 400,
        level: 2
    },
]



function Goal() {
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
    const currentGoal = goals[currentGoalIndex];

    const nextGoal = () => {
        console.log("NEXT CLICKED")
        setCurrentGoalIndex((prevIndex) =>
            prevIndex === goals.length - 1
                ? 0
                : prevIndex + 1
        );
    }

    const previousGoal = () => {
        console.log("PREV CLICKED")

        setCurrentGoalIndex((prevIndex) =>
            prevIndex === 0
                ? goals.length - 1
                : prevIndex - 1
        );
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

            <TaskCard />

            <FooterNav/>
        </Box>
    )

}

export default Goal