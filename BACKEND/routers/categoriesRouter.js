import express from "express";
const router = express.Router();
import { requireLogin } from "../middleware/authMiddleware.js";
import { 
    addCategory,
    getCategoryById,
    editCategory,
    deleteCategory
} from "../db/dal/category.js";

router.post('/new', requireLogin , async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.get('/:categoryId/view', requireLogin , async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.post('/:categoryId/edit', requireLogin , async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.post('/:categoryId/delete', requireLogin , async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

export default router;