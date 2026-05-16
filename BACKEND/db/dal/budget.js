import database from "../databaseConnection.js";
import { getTotalByDate } from "./expense.js";

export async function getBudget(user_id, timeframe) {
  const query = `
    SELECT * FROM budget
    WHERE user_id = :user_id AND timeframe = :timeframe;
    `;

  const params = {
    user_id,
    timeframe,
  };

  try {
    const results = await database.query(query, params);
    const rows = results[0];
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    console.log("Error selecting from budget table");
    console.log(err);
    return null;
  }
}

export async function setBudget(postData) {
  const query = `
    INSERT INTO budget (user_id, timeframe, amount)
    VALUES (:user_id, :timeframe, :amount)
        ON DUPLICATE KEY UPDATE
        amount = :amount;
    `;

  // postData must have:
  //   user_id,
  //   timeframe,
  //   amount,
  //

  try {
    const results = await database.query(query, postData);
    let insertedID = results[0].insertId;
    return { success: true, insertedID };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

// this might need to go in the api folder but I'm keeping it here for now and I'll let Ria decide

function getBudgetRating(spending, budget) {
  if (spending > budget) {
    return "Over Budget";
  }

  if (spending >= budget * 0.9) {
    return "Near Budget";
  }

  return "Under Budget";
}

function jsDateToSQLDate(date) {
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
}

function formatDisplayDate(date) {
  return date.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
  });
}

export async function getPastDayRatings(numOfDays, user_id) {
  const ratings = [];
  const dailyBudget = await getBudget(user_id, "daily");

  if (!dailyBudget) {
    return [];
  }

  for (let i = 0; i < numOfDays; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const sqlDate = jsDateToSQLDate(date);

    const total = await getTotalByDate(user_id, sqlDate);

    ratings.push({
      date: formatDisplayDate(date),
      rating: getBudgetRating(total, Number(dailyBudget.amount)),
    });
  }

  return ratings;
}

// export async function editBudget(budget_id, postData) {
//   const query = `
//     UPDATE budget
//         SET user_id = :user_id,
//         timeframe = :timeframe,
//         amount = :amount
//     WHERE budget_id = :budget_id;
//     `;

//   postData.budget_id = budget_id;
//   try {
//     const results = await database.query(query, postData);
//     const result = results[0];
//     return { success: result.affectedRows > 0 };
//   } catch (err) {
//     console.log(err);
//     return { success: false };
//   }
// }
