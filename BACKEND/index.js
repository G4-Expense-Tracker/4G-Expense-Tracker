// express server here
import express from "express";
import cors from "cors";

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

import usersRouter from './routers/usersRouter';
import goalsRouter from './routers/goalsRouter';
import budgetsRouter from './routers/budgetsRouter';

app.use('/users', usersRouter)
app.use('/goals', goalsRouter)
app.use('/budgets', budgetsRouter)

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});