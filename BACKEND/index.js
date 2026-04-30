// express server here
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

import usersRouter from './routers/usersRouter.js';
import goalsRouter from './routers/goalsRouter.js';
import budgetsRouter from './routers/budgetsRouter.js';

app.use('/users', usersRouter)
app.use('/goals', goalsRouter)
app.use('/budgets', budgetsRouter)

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});