import express from "express";
const router = express.Router();

import { requireLogin, requireLogout } from "../middleware/authMiddleware.js";
import {
  getUserById,
  addUser,
  verifyUserCredentials,
  getUserByEmail
} from "../db/dal/user.js";

router.get('/session',requireLogin ,async (req, res) => {
    res.json({
        isLoggedIn: true,
        user: {
        id: user.user_id,
        email: user.email,
        first_name: user.first_name,
        },
    });
})

router.post('/login',requireLogout , async (req, res) => {
    const { email, password } = req.body;

    const user =  await verifyUserCredentials(email, password)

    if (!user) {
        return res.status(400).json({ error: "Login failed" });
    }

    req.session.userId = user.user_id;

    res.json({
        isLoggedIn: true,
        user: {
        id: user.user_id,
        email: user.email,
        first_name: user.first_name,
        },
    });
})

router.post('/register',requireLogout ,async (req, res) => {
    const { first_name, last_name, email, password, phone_number } = req.body;

    if (!email || !password || !first_name) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await getUserByEmail(email)

    if (existingUser && Object.keys(existingUser).length > 0) {
        return res.status(400).json({ error: "User with that email already exists" });
    }

    const addResult = await addUser({
        first_name,
        last_name,
        email,
        password,
        phone_number,
    });

    if (!addResult.success) {
        return res.status(500).json({ error: "Failed to register" });
    }

    req.session.userId = addResult.insertedID;

    res.json({ message: "User registered", isLoggedIn: true });
})

router.post('/logout',requireLogin , (req, res) => {
    req.session = null;
    res.json({ message: "Logged out", isLoggedIn: false });
})

export default router;