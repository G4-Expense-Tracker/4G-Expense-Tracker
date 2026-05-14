import database from "../databaseConnection.js";

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
    return "over budget";
  }

  if (spending >= budget * 0.9) {
    return "near budget";
  }

  return "under budget";
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
