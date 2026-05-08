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

        return res.json({ 
            success: true,
            goals: goals || []
         })
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
            return res.status(400).json({ error: 'Goal not found' })
        }

        return res.json({ goal })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/new', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const { name, target_amount } = req.body;

        const newGoal = await addGoal({ user_id, name, target_amount })

        if (!newGoal.success) {
            return res.status(500).json({ error: "Failed to set goal" });
        }

        res.json({
            success: true,
            message: 'Goal saved'
        })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/edit', requireLogin, async (req, res) => {
    try {
        const goal_id = req.params.goalId
        const { 
            name,
            target_amount,
            progress,
            level
         } = req.body;

         const editedGoal = await editGoal(goal_id, {
            name,
            target_amount,
            progress,
            level
         });

         if (!editedGoal.success) {
            return res.status(500).json({ error: "Failed to edit goal" });
         }

         res.json({
            success: true,
            message: 'Goal edited'
         })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/progress', requireLogin, async (req, res) => {
    try {
        const goal_id = req.params.goalId;
        const { uncleanProgress } = req.body;
        const progress = parseInt(uncleanProgress)

        const progressedGoal = await editProgress(goal_id, { progress })

        if (!progressedGoal.success) {
            return res.status(500).json({ error: "Failed to progress goal" });
        }

        return res.json({ 
            success: true,
            message: 'Goal progressed'
        })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/levelUp', requireLogin, async (req, res) => {
    try {
        const goal_id = req.params.goalId;

        const levelledUpGoal = await levelUp(goal_id);

        if (!levelledUpGoal.success) {
            return res.status(500).json({ error: "Failed to edit goal" });
        }

        return res.json({
            success: true,
            message: 'Goal levelled up'
        })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:goalId/delete', requireLogin, async (req, res) => {
    try {
        const goal_id = req.params.goalId;

        await deleteGoal(goal_id);

        res.json({
            success: true,
            message: 'Goal deleted'
        })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

export default router;