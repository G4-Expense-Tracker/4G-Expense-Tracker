import express from "express";
const router = express.Router();
import { requireLogin } from "../middleware/authMiddleware.js";
import { setBudget, getBudget } from "../db/dal/budget.js";

router.get('/view', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id
        const timeframe = req.query.timeframe

        if (!user_id || !timeframe) {
            return res.status(400).json({ error:'Missing information' })
        }

        const budget = await getBudget(user_id, timeframe)

        if (!budget) {
            return res.json({ budget: null })
        }

        res.json({ budget })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch budgets" });
    }
})

router.post('/set', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id
        const { timeframe, amount } = req.body

        if (!timeframe || !amount) {
            return res.status(400).json({ error: "Missing timeframe or amount" });
        }

        const newBudget = await setBudget({user_id, timeframe, amount})

        if (!newBudget.success) {
            return res.status(500).json({ error: "Failed to set budget" });
        }

        res.json({
            success: true,
            message: 'Budget saved'
        })

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create budget" });
    }
})

export default router;