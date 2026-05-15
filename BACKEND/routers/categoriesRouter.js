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

})

router.get('/:categoryId/view', requireLogin , async (req, res) => {

})

router.post('/:categoryId/edit', requireLogin , async (req, res) => {

})

router.post('/:categoryId/delete', requireLogin , async (req, res) => {

})

export default router;