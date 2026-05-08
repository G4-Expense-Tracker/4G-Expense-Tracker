import express from "express";
const router = express.Router();

import { requireLogin } from "../middleware/authMiddleware.js";
import {
    getTreesByUser,
    getTreeByGoal,
    addTree
} from '../db/dal/tree.js'

router.get("/list", requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;

        const userTrees = await getTreesByUser(user_id)

        if (!userTrees || userTrees.length === 0) {
            return res.status(404).json({ error:'Tree not found' })
        }
        
        return res.json({
            success: true,
            userTrees
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
});

router.get('/:goalId/view', requireLogin, async (req, res) => {
    try {
        const goal_id = req.params.goalId;

        const goalTrees = await getTreeByGoal(goal_id)

        if (!goalTrees) {
            return res.status(404).json({ error: 'Tree not found' });
        }
        
        return res.json({
            success: true,
            goalTrees
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.post('/:goalId/new', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const goal_id = req.params.goalId;
        const tree_type = Math.floor(Math.random() * 5) + 1;

        const newTree = await addTree({user_id, goal_id, tree_type})

        if (!newTree || newTree.length === 0) {
            return res.status(500).json({ error:'Failed to create tree' })
        }

        res.json({
            success: true,
            newTree,
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

export default router;