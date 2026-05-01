import express from "express";
const router = express.Router();

import {
  getUserById,
  addUser,
  verifyUserCredentials,
  getUserByEmail
} from "../db/dal/user.js";

router.get('/login', async (req, res) => {
    if (!req.session.userId) {
        return res.json({ isLoggedIn: false })
    }

    const user = await getUserById(req.session.userId)

    if (!user) {
        req.session = null;
        return res.json({ isLoggedIn: false })
    }

    res.json({
        isLoggedIn: true,
        user: {
        id: user.user_id,
        email: user.email,
        first_name: user.first_name,
        },
    });
})

router.post('/login', async (req, res) => {
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

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password, phone_number } = req.body;

    if (!email || !password || !first_name) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
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

router.post('/logout', (req, res) => {
    req.session = null;
    res.json({ message: "Logged out", isLoggedIn: false });
})

export default router;