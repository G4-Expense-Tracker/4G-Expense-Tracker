// express server here
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieSession from "cookie-session";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

import usersRouter from './routers/usersRouter.js';
import goalsRouter from './routers/goalsRouter.js';
import budgetsRouter from './routers/budgetsRouter.js';

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SESSION_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use('/api/users', usersRouter)
app.use('/api/goals', goalsRouter)
app.use('/api/budgets', budgetsRouter)

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});