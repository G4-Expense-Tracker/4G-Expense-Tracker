import express from "express";
const router = express.Router();
import { requireLogin } from "../middleware/authMiddleware.js";
import { 
    addCategory,
    getCategoryById,
    editCategory,
    deleteCategory
} from "../db/dal/category.js";