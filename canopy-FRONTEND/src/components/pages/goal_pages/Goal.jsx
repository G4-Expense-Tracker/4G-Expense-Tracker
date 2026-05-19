import Header from "./Header"
import { useEffect, useState } from "react"
import TaskCard from "./TaskCard/TaskCard"
import { Box, Typography, Button, TextField } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import Savings from "./TaskCard/Savings"
import FooterNav from "../../Footer/FooterNav"
import VarTaskCard from "./TaskCard/VarTaskCard"
import Congrats from "./TaskCard/Congrats"
import { getAllGoals, addGoalProgress } from "../../../api/goals"

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

    /* edit and delete states */
    const [showActions, setShowActions] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [editName, setEditName] = useState("")
    const [editAmount, setEditAmount] = useState("")

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

    const goalCompleted = currentSavings >= targetSavings

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
    const addSavings = async (amount) => {
        const goal = currentGoal;

        try {
            const updated = await addGoalProgress(goal.id, amount);

            setGoalData((prev) =>
                prev.map((g, index) =>
                    index === currentGoalIndex
                        ? {
                            ...g,
                            progress: updated.goal.progress
                        }
                        : g
                )
            );
        } catch (err) {
            console.error("Add savings failed:", err);
        }
    };

    /* subtract savings */
    const subtractSavings = async (amount) => {
        const goal = currentGoal;

        try {
            const updated = await addGoalProgress(goal.id, amount);

            setGoalData((prev) =>
                prev.map((g, index) =>
                    index === currentGoalIndex
                        ? {
                            ...g,
                            progress: updated.goal.progress
                        }
                        : g
                )
            );
        } catch (err) {
            console.error("Subtract savings failed:", err);
        }
    };

    /* open edit modal */
    const openEditModal = () => {
        setEditName(currentGoal.name)
        setEditAmount(currentGoal.targetAmount)
        setShowEditModal(true)
        setShowActions(false)
    }

    /* apply edit */
    const applyEditGoal = () => {
        setGoalData((prevGoals) =>
            prevGoals.map((goal, index) =>
                index === currentGoalIndex
                    ? {
                          ...goal,
                          name: editName,
                          targetAmount: Number(editAmount)
                      }
                    : goal
            )
        )

        setShowEditModal(false)
    }

    /* delete goal */
    const deleteGoal = () => {
        setGoalData((prevGoals) =>
            prevGoals.filter((goal, index) => index !== currentGoalIndex)
        )

        setCurrentGoalIndex(0)
        setShowDeleteModal(false)
    }

    return (
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
            <Header
                name={currentGoal.name}
                previousGoal={previousGoal}
                nextGoal={nextGoal}
                handleDots={() => setShowActions(!showActions)}
            />

            {/* edit/delete menu that opens from the Header three dots */}
            {showActions && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "6.5rem",
                        left: "50%",
                        transform: "translateX(140px)",
                        display: "flex",
                        bgcolor: "#00483b",
                        color: "white",
                        borderRadius: "6px",
                        overflow: "hidden",
                        zIndex: 50
                    }}
                >
                    <Button
                        onClick={openEditModal}
                        sx={{
                            color: "white",
                            px: 2,
                            textTransform: "none",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <EditIcon />
                        Edit
                    </Button>

                    <Box
                        sx={{
                            width: "1px",
                            bgcolor: "rgba(255,255,255,0.5)",
                            my: 1
                        }}
                    />

                    <Button
                        onClick={() => {
                            setShowDeleteModal(true)
                            setShowActions(false)
                        }}
                        sx={{
                            color: "white",
                            px: 2,
                            textTransform: "none",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <DeleteIcon />
                        Delete
                    </Button>
                </Box>
            )}

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
            {goalCompleted ? (
                <VarTaskCard message="Congrats on reaching your goal!" />
            ) : levelFiveIncomplete ? (
                <VarTaskCard message="Reach your goal to reveal your tree!" />
            ) : (
                <TaskCard progress={currentGoalProgress} goal={currentGoal} />
            )}

            <Congrats
                open={showCongrats}
                onClose={() => setShowCongrats(false)}
            />

            {/* edit modal */}
            {showEditModal && (
                <Box sx={modalOverlay}>
                    <Box sx={modalBox}>
                        <Typography variant="h4" fontWeight="bold">
                            Edit Goal
                        </Typography>

                        <Typography sx={{ mb: 2 }}>{currentGoal.name}</Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 2 }}>
                            <Typography sx={{ width: "70px", textAlign: "left" }}>
                                Name
                            </Typography>

                            <TextField
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                fullWidth
                                size="small"
                                sx={inputStyle}
                            />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 2 }}>
                            <Typography sx={{ width: "70px", textAlign: "left" }}>
                                Amount
                            </Typography>

                            <TextField
                                value={editAmount}
                                onChange={(e) => setEditAmount(e.target.value)}
                                fullWidth
                                size="small"
                                sx={inputStyle}
                            />
                        </Box>

                        <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
                            <Button
                                onClick={() => setShowEditModal(false)}
                                sx={cancelButton}
                            >
                                Cancel
                            </Button>

                            <Button onClick={applyEditGoal} sx={applyButton}>
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}

            {/* delete modal */}
            {showDeleteModal && (
                <Box sx={modalOverlay}>
                    <Box sx={modalBox}>
                        <Typography variant="h4" fontWeight="bold">
                            Delete Goal
                        </Typography>

                        <Typography>{currentGoal.name}</Typography>

                        <Typography sx={{ fontSize: "1.5rem", textAlign: "center", my: 3 }}>
                            Are you sure you want to delete this goal?
                        </Typography>

                        <Box sx={{ display: "flex", gap: 3 }}>
                            <Button
                                onClick={() => setShowDeleteModal(false)}
                                sx={cancelButton}
                            >
                                No
                            </Button>

                            <Button onClick={deleteGoal} sx={applyButton}>
                                Yes
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}

            <FooterNav />
        </Box>
    )
}

/* modal background */
const modalOverlay = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

/* modal box */
const modalBox = {
    width: "330px",
    padding: "35px",
    borderRadius: "28px",
    background: "linear-gradient(#259c7c, #a6c98a)",
    color: "white",
    textAlign: "center"
}

/* input style */
const inputStyle = {
    bgcolor: "white",
    borderRadius: "30px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "30px"
    }
}

/* cancel/no button */
const cancelButton = {
    flex: 1,
    borderRadius: "30px",
    bgcolor: "rgba(255,255,255,0.35)",
    color: "#00483b",
    border: "1px solid white",
    fontWeight: "bold",
    fontSize: "1.1rem",
    textTransform: "none"
}

/* apply/yes button */
const applyButton = {
    flex: 1,
    borderRadius: "30px",
    bgcolor: "#00483b",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1rem",
    textTransform: "none"
}

export default Goal