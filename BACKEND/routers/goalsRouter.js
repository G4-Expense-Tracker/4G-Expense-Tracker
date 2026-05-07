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
} from "../db/dal/goal";

router.get('/list', requireLogin, async (req, res) => {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.get('/:goalId', requireLogin, async (req, res) => {
    try {

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