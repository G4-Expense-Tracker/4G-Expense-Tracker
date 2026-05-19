import Header from "./Header"
import { useEffect, useState } from "react"
import TaskCard from "./TaskCard/TaskCard"
import { Box, Typography, Button } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import Savings from "./TaskCard/Savings"
import FooterNav from "../../Footer/FooterNav"
import VarTaskCard from "./TaskCard/VarTaskCard"
import Congrats from "./TaskCard/Congrats"
import { getAllGoals } from "../../../api/goals"

// THIS NEEDS AN API CALL! <3
const taskProgress = {
    1: { 1: 1, 2: 3, 3: 0, 4: 2, 5: 1 },
    2: { 1: 3, 2: 2, 3: 1, 4: 0, 5: 3 },
    3: { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3 },
    4: { 1: 1, 2: 1, 3: 3, 4: 3, 5: 3 }
}

function Goal() {
    // ---------------- STATE ----------------
    const [goalData, setGoalData] = useState([])
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0)

    const [showCongrats, setShowCongrats] = useState(false)
    const [hasShownCongrats, setHasShownCongrats] = useState(false)

    const [showActions, setShowActions] = useState(false)

    // edit/delete UI state (assumed used elsewhere in your file)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [editName, setEditName] = useState("")
    const [editAmount, setEditAmount] = useState("")

    // ---------------- FETCH ----------------
    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const data = await getAllGoals()
                setGoalData(data || [])
            } catch (err) {
                console.error("Failed to fetch goals:", err)
            }
        }

        fetchGoals()
    }, [])

    // ---------------- GUARDS ----------------
    const currentGoal = goalData[currentGoalIndex]

    if (goalData.length === 0) {
        return (
            <Box>
                <Typography variant="h1">No Goals!</Typography>
                <Typography>Add a goal using the plus icon below!</Typography>
                <FooterNav />
            </Box>
        )
    }

    if (!currentGoal) {
        return (
            <Box>
                <Typography>Loading Goals...</Typography>
            </Box>
        )
    }

    // ---------------- DERIVED VALUES ----------------
    const currentGoalProgress = taskProgress[currentGoal.id]

    const currentSavings = currentGoal.progress ?? 0
    const targetSavings = currentGoal.targetAmount ?? 0

    const goalCompleted = currentSavings >= targetSavings

    const levelFiveIncomplete =
        currentGoal.level === 5 && currentSavings < targetSavings

    // ---------------- EFFECTS ----------------
    useEffect(() => {
        if (goalCompleted && !hasShownCongrats) {
            setShowCongrats(true)
            setHasShownCongrats(true)
        }
    }, [goalCompleted, hasShownCongrats])

    // ---------------- NAVIGATION ----------------
    const nextGoal = () => {
        setCurrentGoalIndex(prev =>
            prev === goalData.length - 1 ? 0 : prev + 1
        )
    }

    const previousGoal = () => {
        setCurrentGoalIndex(prev =>
            prev === 0 ? goalData.length - 1 : prev - 1
        )
    }

    // ---------------- ACTIONS ----------------
    const addSavings = (amount) => {
        setGoalData(prev =>
            prev.map((g, i) =>
                i === currentGoalIndex
                    ? { ...g, progress: g.progress + amount }
                    : g
            )
        )
    }

    const subtractSavings = (amount) => {
        setGoalData(prev =>
            prev.map((g, i) =>
                i === currentGoalIndex
                    ? { ...g, progress: Math.max(0, g.progress - amount) }
                    : g
            )
        )
    }

    const openEditModal = () => {
        setEditName(currentGoal.name)
        setEditAmount(currentGoal.targetAmount)
        setShowEditModal(true)
        setShowActions(false)
    }

    const applyEditGoal = () => {
        setGoalData(prev =>
            prev.map((g, i) =>
                i === currentGoalIndex
                    ? {
                        ...g,
                        name: editName,
                        targetAmount: Number(editAmount)
                    }
                    : g
            )
        )
        setShowEditModal(false)
    }

    const deleteGoal = () => {
        setGoalData(prev => prev.filter((_, i) => i !== currentGoalIndex))
        setCurrentGoalIndex(0)
        setShowDeleteModal(false)
    }

    // ---------------- UI ----------------
    return (
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
            <Header
                name={currentGoal.name}
                previousGoal={previousGoal}
                nextGoal={nextGoal}
                handleDots={() => setShowActions(v => !v)}
            />

            {/* actions */}
            {showActions && (
                <Box sx={{
                    position: "absolute",
                    top: "6.5rem",
                    left: "50%",
                    transform: "translateX(140px)",
                    display: "flex",
                    bgcolor: "#00483b",
                    color: "white",
                    borderRadius: 2,
                    zIndex: 50
                }}>
                    <Button onClick={openEditModal} sx={{ color: "white" }}>
                        <EditIcon /> Edit
                    </Button>

                    <Button
                        onClick={() => {
                            setShowDeleteModal(true)
                            setShowActions(false)
                        }}
                        sx={{ color: "white" }}
                    >
                        <DeleteIcon /> Delete
                    </Button>
                </Box>
            )}

            {/* savings */}
            <Savings
                currentSavings={currentSavings}
                targetSavings={targetSavings}
                addSavings={addSavings}
                subtractSavings={subtractSavings}
            />

            {/* goal info */}
            <Box sx={{ display: "flex", p: 2 }}>
                <Typography>{currentGoal.name}</Typography>

                <Box sx={{ display: "flex", pl: 2 }}>
                    <Typography>Lv {currentGoal.level}</Typography>
                    <InfoIcon />
                </Box>
            </Box>

            {/* task card */}
            {goalCompleted ? (
                <VarTaskCard message="Congrats on reaching your goal!" />
            ) : levelFiveIncomplete ? (
                <VarTaskCard message="Reach your goal to reveal your tree!" />
            ) : (
                <TaskCard
                    progress={currentGoalProgress}
                    goal={currentGoal}
                />
            )}

            <Congrats
                open={showCongrats}
                onClose={() => setShowCongrats(false)}
            />

            <FooterNav />
        </Box>
    )
}

export default Goal