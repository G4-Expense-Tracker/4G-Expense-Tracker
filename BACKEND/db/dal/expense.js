import database from "../databaseConnection";

export async function getExpensesByUser(userid) {
  const query = `
    SELECT * from expense
    WHERE user_id = :userid
    ORDER BY date DESC;
    `;

  const params = {
    userid,
  };

  try {
    const results = await database.query(query, params);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from expense table");
    console.log(err);
    return null;
  }
}

export async function addExpense(postData) {
  const query = `
    INSERT INTO expense (category_id, user_id, title, date, note, quick_expense)
    VALUES (:category_id, :user_id, :title, :date, :note, :quick_expense)
    `;

  //   postData MUST HAVE:
  //     category_id (number from action_type table)
  //     user_id
  //     title
  //     date (MM/DD/YYYY)
  //     note (optional)
  //     quick_expense (boolean)

  try {
    const results = await database.query(query, postData);
    let insertedID = results[0].insertId;
    console.log("Inserted new expense with ID:");
    console.log(insertedID);
    return { success: true, insertedID };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function editExpense(expenseId, postData) {
  const query = `
    UPDATE expense
        SET category_id = :category_id,
        user_id = :user_id,
        title = :title,
        date = :date,
        note = :note,
        quick_expense = quick_expense
    WHERE expense_id = :expense_id
    `;

  //   postData MUST HAVE:
  //     category_id (number from action_type table)
  //     user_id
  //     title
  //     date (MM/DD/YYYY)
  //     note (optional)
  //     quick_expense (boolean)

  try {
    const results = await database.query(query, postData, expenseId);
    let insertedID = results[0].insertId;
    console.log("Inserted new expense with ID:");
    console.log(insertedID);
    return { success: true, insertedID };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function deleteExpense(expense_id) {
  let query = `
    DELETE FROM expense
    WHERE expense_id = :expense_id
    `;

  let params = {
    expense_id,
  };

  try {
    await database.query(query, params);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
