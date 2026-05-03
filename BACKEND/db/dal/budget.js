import database from "../databaseConnection";

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
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from budget table");
    console.log(err);
    return null;
  }
}

export async function setBudget(user_id, timeframe, amount) {
  const query = `
    INSERT INTO budget (user_id, timeframe, amount)
    VALUES (:user_id, :timeframe, :amount);
    `;

  const params = {
    user_id,
    timeframe,
    amount,
  };

  try {
    const results = await database.query(query, postData);
    let insertedID = results[0].insertId;
    console.log("Inserted new budget with ID:");
    console.log(insertedID);
    return { success: true, insertedID };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

async function editBudget(budget_id, postData) {
  const query = `
    UPDATE budget
        SET user_id = :user_id,
        timeframe = :timeframe,
        amount = :amount
    WHERE budget_id = :budget_id;
    `;

  postData.budget_id = budget_id;
  try {
    const results = await database.query(query, postData);
    console.log("edited budget");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
