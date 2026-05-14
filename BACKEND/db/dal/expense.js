import database from "../databaseConnection.js";

export async function getExpensesByUser(user_id) {
  const query = `
    SELECT e.*, c.name, i.icon_name
    FROM expense e
    INNER JOIN category c
      ON c.category_id = e.category_id
    INNER JOIN icon i
      ON i.icon_id = c.icon_id
    WHERE user_id = :user_id
    ORDER BY date DESC;
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    // console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from expense table");
    console.log(err);
    return [];
  }
}

export async function getQuickExpenses(user_id) {
  const query = `
    SELECT e.*, c.name, i.icon_name
    FROM expense e
    INNER JOIN category c
      ON c.category_id = e.category_id
    INNER JOIN icon i
      ON i.icon_id = c.icon_id
    WHERE user_id = :user_id AND quick_expense = 1
    ORDER BY date DESC;
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    // console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from expense table");
    console.log(err);
    return [];
  }
}

export async function getOneExpense(expense_id) {
  const query = `
    SELECT e.*, c.name, i.icon_name
    FROM expense e
    INNER JOIN category c
      ON c.category_id = e.category_id
    INNER JOIN icon i
      ON i.icon_id = c.icon_id
    WHERE expense_id = :expense_id;
    `;

  const params = {
    expense_id,
  };

  try {
    const results = await database.query(query, params);
    const rows = results[0];
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    console.log("Error selecting from expense table");
    console.log(err);
    return null;
  }
}

export async function getExpensesByCategory(user_id, category_id) {
  const query = `
    SELECT e.*, c.name, i.icon_name
    FROM expense e
    INNER JOIN category c
      ON c.category_id = e.category_id
    INNER JOIN icon i
      ON i.icon_id = c.icon_id
    WHERE user_id = :user_id AND category_id = :category_id
    ORDER BY date DESC;
    `;

  const params = {
    user_id,
    category_id,
  };

  try {
    const results = await database.query(query, params);
    // console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from expense table");
    console.log(err);
    return [];
  }
}

export async function addExpense(postData) {
  const query = `
    INSERT INTO expense (category_id, user_id, title, amount, date, note, quick_expense)
    VALUES (:category_id, :user_id, :title, :amount, :date, :note, :quick_expense);
    `;

  //   postData MUST HAVE:
  //     category_id (number from action_type table)
  //     user_id
  //     title
  //     amount (INT)
  //     date (YYYY-MM-DD) with dashes
  //     note (optional)
  //     quick_expense (boolean)

  try {
    const results = await database.query(query, postData);
    let insertedID = results[0].insertId;
    // console.log("Inserted new expense with ID:");
    // console.log(insertedID);
    return { success: true, insertedID };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function editExpense(expense_id, postData) {
  const query = `
    UPDATE expense
        SET category_id = :category_id,
        title = :title,
        amount = :amount,
        date = :date,
        note = :note,
        quick_expense = :quick_expense
    WHERE expense_id = :expense_id
      AND user_id = :user_id;
    `;

  //   postData MUST HAVE:
  //     category_id (number from action_type table)
  //     user_id
  //     title
  //     amount (INT)
  //     date (YYYY-MM-DD) with dashes
  //     note (optional)
  //     quick_expense (boolean)

  postData.expense_id = expense_id;

  try {
    const results = await database.query(query, postData);
    const result = results[0];
    return { success: result.affectedRows > 0 };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function deleteExpense(expense_id, user_id) {
  let query = `
    DELETE FROM expense
    WHERE expense_id = :expense_id
    AND user_id = :user_id;
    `;

  let params = {
    expense_id,
    user_id,
  };

  try {
    const results = await database.query(query, params);
    const result = results[0];
    return result.affectedRows > 0;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getCategoryTotalsByDateRange(
  user_id,
  startDate,
  endDate,
) {
  const query = `
    SELECT 
      category_id,
      SUM(amount) as total
    FROM expense
    WHERE user_id = :user_id
      AND date BETWEEN :startDate AND :endDate
    GROUP BY category_id;
  `;

  try {
    const results = await database.query(query, {
      user_id,
      startDate,
      endDate,
    });

    const rows = results[0];
    return rows[0]?.total || 0;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getCategoryComparison(
  user_id,
  currentStart,
  currentEnd,
  prevStart,
  prevEnd,
) {
  const query = `
    SELECT 
      category_id,
      SUM(CASE 
        WHEN date BETWEEN :currentStart AND :currentEnd THEN amount 
        ELSE 0 
      END) as current_total,
      SUM(CASE 
        WHEN date BETWEEN :prevStart AND :prevEnd THEN amount 
        ELSE 0 
      END) as previous_total
    FROM expense
    WHERE user_id = :user_id
      AND date BETWEEN :prevStart AND :currentEnd
    GROUP BY category_id;
  `;

  try {
    const results = await database.query(query, {
      user_id,
      currentStart,
      currentEnd,
      prevStart,
      prevEnd,
    });

    return results[0];
  } catch (err) {
    console.log(err);
    return [];
  }
}

function calculateChanges(rows) {
  return rows.map((row) => {
    const prev = Number(row.previous_total) || 0;
    const curr = Number(row.current_total) || 0;

    let percentChange;

    if (prev === 0 && curr === 0) percentChange = 0;
    else if (prev === 0) percentChange = 100;
    else percentChange = ((curr - prev) / prev) * 100;

    return {
      category_id: row.category_id,
      current: curr,
      previous: prev,
      percentChange,
    };
  });
}

export async function getTop3Changes(
  user_id,
  currentStart,
  currentEnd,
  prevStart,
  prevEnd,
) {
  const rows = await getCategoryComparison(
    user_id,
    currentStart,
    currentEnd,
    prevStart,
    prevEnd,
  );

  const data = calculateChanges(rows);

  return data
    .sort((a, b) => Math.abs(b.percentChange) - Math.abs(a.percentChange))
    .slice(0, 3);
}

export async function getTotalByDateRange(user_id, startDate, endDate) {
  const query = `
    SELECT SUM(amount) as total
    FROM expense
    WHERE user_id = :user_id
      AND date BETWEEN :startDate AND :endDate;
  `;

  const results = await database.query(query, { user_id, startDate, endDate });
  return results[0][0]?.total || 0;
}

export async function getTotalByDate(user_id, date) {
  const query = `
    SELECT SUM(amount) as total
    FROM expense
    WHERE user_id = :user_id
      AND date = :date;
  `;

  const results = await database.query(query, { user_id, date });
  return results[0][0]?.total || 0;
}
