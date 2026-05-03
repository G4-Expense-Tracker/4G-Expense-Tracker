import database from "../databaseConnection";

export async function getTreesByUser(user_id) {
  const query = `
    SELECT * FROM tree
    WHERE user_id = :userid;
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from tree table");
    console.log(err);
    return null;
  }
}

export async function getTreesByYear(user_id) {
  const query = `
    SELECT * FROM tree
    WHERE user_id = :userid;
    GROUP BY YEAR(date_earned)
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from tree table");
    console.log(err);
    return null;
  }
}

export async function addTree(postData) {
  const query = `
    INSERT INTO tree (user_id, tree_type, date_earned)
    VALUES (:user_id, :tree_type, :date_earned);
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from tree table");
    console.log(err);
    return null;
  }
}
