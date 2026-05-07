import express from "express";
const router = express.Router();

import { requireLogin } from '../middleware/authMiddleware.js'
import {
    getExpensesByUser,
    getQuickExpenses,
    getOneExpense,
    getExpensesByCategory,
    addExpense,
    editExpense,
    deleteExpense,
    getCategoryTotalsByDateRange,
    getCategoryComparison,
    getTop3Changes,
    getTotalByDateRange
} from '../db/dal/expense.js'

router.get('/list', requireLogin, async (req, res) => {
    try {
        // Using query to get expenses vs quick expense
        const isQuickExpense = req.query.quickExpense === 'true'
        const user_id = req.user.user_id

        if (isQuickExpense) {
            const quickExpenses = await getQuickExpenses(user_id)

            if (!quickExpenses || quickExpenses.length === 0 ) {
                return res.json({ expenses: null })
            }

            return res.json({ expenses: quickExpenses })
        } else if (!isQuickExpense) {
            const expenseResults = await getExpensesByUser(user_id)

            if (!expenseResults || expenseResults.length === 0 ) {
                return res.json({ expenses: null })
            }

            return res.json({ expenses: expenseResults })
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.get('/:expenseId/view', requireLogin, async (req, res) => {
    try {
        const expense_id = req.params.expenseId

        const expense = await getOneExpense(expense_id)

        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' })
        }

        res.json({ expense });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.get('/:categoryId/list', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id
        const category_id = req.params.categoryId

        const categoryExpenses = await getExpensesByCategory(user_id, category_id);

        if (!categoryExpenses || categoryExpenses.length === 0 ) {
            return res.json({ categoryExpenses: null })
        }

        return res.json({ categoryExpenses })
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/new', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;

        const newExpense = await addExpense({
        ...req.body,
        user_id
        });

        if (!newExpense.success) {
        return res.status(500).json({ error: "Failed to add expense" });
        }

        res.json({
        success: true,
        insertedID: newExpense.insertedID
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:expenseId/edit', requireLogin , async(req, res) => {
    try {
        const user_id = req.user.user_id;
        const { expenseId } = req.params;

        const result = await editExpense(expenseId, {
        ...req.body,
        user_id
        });

        if (!result.success) {
        return res.status(400).json({ error: "Update failed" });
        }

        res.json({ success: true });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.post('/:expenseId/delete', requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const { expenseId } = req.params;

        const success = await deleteExpense(expenseId, user_id);

        if (!success) {
        return res.status(400).json({ error: "Delete failed" });
        }

        res.json({ success: true });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" })
    }
})

router.get("/category-totals", requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const { startDate, endDate } = req.query;

        const total = await getCategoryTotalsByDateRange(
            user_id,
            startDate,
            endDate
        );

        res.json({ total });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
});

router.get("/category/:categoryId/comparison", requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const category_id = req.params.categoryId

        const categoryComparison = await getCategoryComparison(
            user_id,
            req.query.currentStart,
            req.query.currentEnd,
            req.query.prevStart,
            req.query.prevEnd
        );

        res.json({ comparison: categoryComparison });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
});

router.get("/category/top-changes", requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;

        const topChanges = await getTop3Changes(
            user_id,
            req.query.currentStart,
            req.query.currentEnd,
            req.query.prevStart,
            req.query.prevEnd
        );

        res.json({ topChanges });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
});

router.get("/total", requireLogin, async (req, res) => {
    try {
        const user_id = req.user.user_id;

        const dateRangeTotal = await getTotalByDateRange(
            user_id,
            req.query.startDate,
            req.query.endDate
        );

        res.json({ dateRangeTotal });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
});

export default router;