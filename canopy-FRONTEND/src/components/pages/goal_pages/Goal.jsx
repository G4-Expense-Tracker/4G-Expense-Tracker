import Header from "./Header"
import { useEffect, useState } from "react"
import TaskCard from "./TaskCard/TaskCard"
import { Box, Typography } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import Savings from "./TaskCard/Savings"
import FooterNav from "../../Footer/FooterNav"
import VarTaskCard from "./TaskCard/VarTaskCard"
import Congrats from "./TaskCard/Congrats"
import { getAllGoals } from "../../../api/goals"

// DATABASE CALLS
// these objects are just for ui and to show the shape of the object we want from the db

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
    },

    {
        id: 3,
        name: "Air Pods",
        targetAmount: 360,
        progress: 360,
        level: 3
    },

    {
        id: 4,
        name: "Nikes",
        targetAmount: 90,
        progress: 50,
        level: 5
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
    },

    3: {
        1: 3,
        2: 3,
        3: 3,
        4: 3,
        5: 3
    },

    4: {
        1: 1,
        2: 1,
        3: 3,
        4: 3,
        5: 3
    }
}

function Goal() {

    /* states */
    const [goalData, setGoalData] = useState(goals)
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0)
    const [showCongrats, setShowCongrats] = useState(false)
    const [hasShownCongratsPopUp, setHasShownCongratsPopUp] = useState(false)

    /* fetch goals */
    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const goals = await getAllGoals()
                setGoalData(goals)
            } catch (err) {
                console.error("Failed to fetch goals:", err)
            }
        }

        fetchGoals()
    }, [])

    /* helper variables */
    const currentGoal = goalData[currentGoalIndex]

    /* loading state */
    if (!currentGoal) {
        return (
            <Box>
                <Typography variant="body1" component="p">
                    Loading Goals
                </Typography>
            </Box>
        )
    }

    const currentGoalProgress = taskProgress[currentGoal.id]

    const currentSavings = currentGoal.progress
    const targetSavings = currentGoal.targetAmount

    const goalCompleted =
        currentSavings >= targetSavings

    const levelFiveIncomplete =
        currentGoal.level === 5 &&
        currentSavings < targetSavings

    /* completion popup */
    useEffect(() => {
        if (goalCompleted && !hasShownCongratsPopUp) {
            setShowCongrats(true)
            setHasShownCongratsPopUp(true)
        }
    }, [goalCompleted, hasShownCongratsPopUp])

    /* no goals page */
    if (goalData.length === 0) {
        return (
            <Box>

                <Typography variant="h1" component="h1">
                    No Goals!
                </Typography>

                <Typography variant="body1" component="p">
                    Add a goal using the plus icon down below!
                </Typography>

                <FooterNav />

            </Box>
        )
    }

    /* next goal */
    const nextGoal = () => {
        setCurrentGoalIndex((prevIndex) =>
            prevIndex === goalData.length - 1 ? 0 : prevIndex + 1
        )
    }

    /* previous goal */
    const previousGoal = () => {
        setCurrentGoalIndex((prevIndex) =>
            prevIndex === 0 ? goalData.length - 1 : prevIndex - 1
        )
    }

    /* add savings */
    const addSavings = (amount) => {
        setGoalData((prevGoals) =>
            prevGoals.map((goal, index) =>
                index === currentGoalIndex
                    ? {
                        ...goal,
                        progress: goal.progress + amount
                    }
                    : goal
            )
        )
    }

    /* subtract savings */
    const subtractSavings = (amount) => {
        setGoalData((prevGoals) =>
            prevGoals.map((goal, index) =>
                index === currentGoalIndex
                    ? {
                        ...goal,
                        progress: Math.max(0, goal.progress - amount)
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

            {/* Progress bar and savings */}
            <Savings
                currentSavings={currentGoal.progress}
                targetSavings={currentGoal.targetAmount}
                addSavings={addSavings}
                subtractSavings={subtractSavings}
            />

            {/* goal name and level */}
            <Box sx={{ display: "flex", padding: "1rem" }}>

                <Typography variant="body1" component="h2">
                    {currentGoal.name}
                </Typography>

                <Box sx={{ display: "flex", paddingLeft: "2rem" }}>

                    <Typography variant="body1" component="p">
                        Lv {currentGoal.level}
                    </Typography>

                    <InfoIcon />

                </Box>

            </Box>

            {/* task cards */}
            {
                goalCompleted
                    ? (
                        <VarTaskCard message="Congrats on reaching your goal!" />
                    )
                    : levelFiveIncomplete
                        ? (
                            <VarTaskCard message="Reach your goal to reveal your tree!" />
                        )
                        : (
                            <TaskCard
                                progress={currentGoalProgress}
                                goal={currentGoal}
                            />
                        )
            }

            <Congrats
                open={showCongrats}
                onClose={() => setShowCongrats(false)}
            />

            <FooterNav />

        </Box>
    )
}

export default Goal