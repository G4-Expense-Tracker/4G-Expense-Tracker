import express from "express";
const router = express.Router();

import { requireLogin } from '../middleware/authMiddleware.js'
import { 
    getGoalsByUser,
    getGoalById,
    addGoal,
    editGoal,
    editProgress,
    levelUp,
    deleteGoal,
} from "../db/dal/goal.js";

router.get('/list', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id

        const goals = await getGoalsByUser(user_id)

        if (!goals) {
            return res.json({ goals: null })
        }

        return res.json({ goals })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.get('/:goalId', requireLogin, async (req, res) => {
    try {
        const goal_id = req.params.goalId

        const goal = await getGoalById(goal_id)

        if (!goal) {
            return res.json({ goal: null })
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/new', requireLogin, (req, res) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/edit', requireLogin, async (req, res) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/progress', requireLogin, async (req, res) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/levelUp', requireLogin, async (req, res) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/delete', requireLogin, async (req, res) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

export default router;