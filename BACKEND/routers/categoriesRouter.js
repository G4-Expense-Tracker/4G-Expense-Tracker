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
        // body needs name and icon_id
        const newCategory = await addCategory(req.body)

        if (!newCategory.success) {
            return res.status(500).json({ error: "Failed to add category" });
        }

        res.json({
            success: true,
            categoryId: newCategory.category_id
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.get('/:categoryId/view', requireLogin , async (req, res) => {
    try {
        const category_id = req.params.categoryId

        const category = await getCategoryById(category_id)

        if (!category) {
            return res.status(404).json({ error: 'Category not found' })
        }

        res.json({ category })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.post('/:categoryId/edit', requireLogin , async (req, res) => {
    try {
        const category_id = req.params.categoryId

        const editedCategory = await editCategory(category_id, req.body)

        if (!editedCategory.success) {
            return res.status(400).json({ error: "Failed to edit category" });
        }

        res.json({
            success: true,
            categoryId: editedCategory.category_id
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

router.post('/:categoryId/delete', requireLogin , async (req, res) => {
    try {
        const category_id = req.params.categoryId

        const success = await deleteCategory(category_id)

        if (!success) {
            return res.status(400).json({ error: "Failed to delete category" });
        }

        res.json({ success: true })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server failure" });
    }
})

export default router;