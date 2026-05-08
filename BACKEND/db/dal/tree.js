import database from "../databaseConnection.js";

// export async function getTreesByUser(user_id) {
//   const query = `
//     SELECT * FROM tree
//     WHERE user_id = :user_id;
//     `;

//   const params = {
//     user_id,
//   };

//   try {
//     const results = await database.query(query, params);
//     // console.log(results[0]);
//     return results[0];
//   } catch (err) {
//     console.log("Error selecting from tree table");
//     console.log(err);
//     return null;
//   }
// }

export async function getTreeByGoal(goal_id) {
  const query = `
    SELECT * FROM tree
    WHERE goal_id = :goal_id;
    `;

  const params = {
    goal_id,
  };

  try {
    const results = await database.query(query, params);
    const rows = results[0];
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    console.log("Error selecting from tree table");
    console.log(err);
    return [];
  }
}

export async function getTreesByUser(user_id) {
  const query = `
    SELECT * FROM tree
    WHERE user_id = :user_id
    ORDER BY YEAR(date_earned) DESC;
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    // console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from tree table");
    console.log(err);
    return [];
  }
}

export async function addTree(postData) {
  const query = `
    INSERT INTO tree (user_id, tree_type, goal_id, date_earned)
    VALUES (:user_id, :tree_type, :goal_id, CURDATE());
    `;

  //   postData MUST HAVE:
  //     user_id
  //     tree_type (INT 1 to 5)
  //     goal_id

  try {
    const results = await database.query(query, postData);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from tree table");
    console.log(err);
    return null;
  }
}
