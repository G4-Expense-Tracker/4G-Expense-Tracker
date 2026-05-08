import database from "../databaseConnection.js";

export async function getGoalsByUser(user_id) {
  const query = `
    SELECT * from goal
    WHERE user_id = :user_id;
    `;

  const params = {
    user_id,
  };

  try {
    const results = await database.query(query, params);
    // console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from goal table");
    console.log(err);
    return [];
  }
}

export async function getGoalById(goal_id) {
  const query = `
    SELECT * from goal
    WHERE goal_id = :goal_id;
    `;

  const params = {
    goal_id,
  };

  try {
    const results = await database.query(query, { goal_id });
    const rows = results[0];
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    console.log("Error selecting from goal table");
    console.log(err);
    return null;
  }
}

export async function addGoal(postData) {
  const query = `
    INSERT INTO goal (user_id, name, target_amount, progress, level, start_date)
    VALUES (:user_id, :name, :target_amount, :progress, :level, CURDATE());
    `;

  //   postData MUST HAVE:
  //     user_id,
  //     name,
  //     target_amount

  postData.progress = 0;
  postData.level = 1;

  try {
    const results = await database.query(query, postData);

    const result = results[0];
    const goal_id = result.insertId;

    return { success: true, goal_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function editGoal(goal_id, postData) {
  const query = `
    UPDATE goal
        SET name = :name, 
        target_amount = :target_amount, 
        progress = :progress, 
        level = :level
    WHERE goal_id = :goal_id;
    `;

  //   postData MUST HAVE:
  //       name,
  // target_amount,
  // progress,
  // level

  postData.goal_id = goal_id;

  try {
    const results = await database.query(query, postData);

    const affectedRows = results[0].affectedRows;

    if (affectedRows === 0) {
      return { success: false, message: "Goal not found" };
    }

    return { success: true, goal_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function editProgress(goal_id, postData) {
  const query = `
    UPDATE goal
        SET progress = progress + :progress
    WHERE goal_id = :goal_id;
    `;

  //   postData MUST HAVE:
  //     progress (INT)

  postData.goal_id = goal_id;

  try {
    const results = await database.query(query, postData);

    const affectedRows = results[0].affectedRows;

    if (affectedRows === 0) {
      return { success: false, message: "Goal not found" };
    }

    return { success: true, goal_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function levelUp(goal_id) {
  const query = `
    UPDATE goal
        SET level = level + 1
    WHERE goal_id = :goal_id;
    `;

  try {
    const results = await database.query(query, { goal_id });

    const affectedRows = results[0].affectedRows;

    if (affectedRows === 0) {
      return { success: false, message: "Goal not found" };
    }

    const updatedGoal = await getGoalById(goal_id);

    return { success: true, goal_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function deleteGoal(goal_id) {
  let query = `
    DELETE FROM goal
    WHERE goal_id = :goal_id;
    `;

  let params = {
    goal_id,
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

export async function getUserProgress(user_id, goal_id, current_level) {
  /*

Returns: {
action_name: (times user did action)
}

eg {
  "Log in to Canopy": 3,
}

*/

  const query = `
    SELECT a.name,
    COUNT(u.user_action_log_id) AS progress
    FROM action_type a
      INNER JOIN user_action_log u
      on a.action_type_id = u.action_type_id
    WHERE u.user_id = :user_id AND goal_id = :goal_id AND goal_level = :current_level
    GROUP BY u.action_type_id, a.name;
    `;

  const params = {
    user_id,
    goal_id,
    current_level,
  };

  try {
    const results = await database.query(query, params);
    const rows = results[0];

    const progressObject = {};

    for (const row of rows) {
      progressObject[row.name] = Number(row.progress);
    }

    return progressObject;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export const ACTION_TYPES = {
  LOGIN: 1,
  LOG_EXPENSE: 2,
  ADD_TO_SAVINGS: 3,
  SET_DAILY_BUDGET: 4,
  SPEND_WITHIN_BUDGET: 5,
};

export async function logUserAction(postData) {
  const query = `
    INSERT INTO user_action_log (user_id, action_type_id, goal_id, timestamp, goal_level)
    VALUES (:user_id, :action_type_id, :goal_id, NOW(), :goal_level);
    `;

  //   postData MUST HAVE:
  //     user_id
  //     action_type_id (eg. ACTION_TYPES.LOGIN)
  //     goal_id
  //     goal_level

  try {
    const results = await database.query(query, postData);

    const result = results[0];
    const user_action_log_id = result.insertId;

    return { success: true, user_action_log_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function getQuotas(goal_level) {
  /*

Returns: {
action_name: (quota)
}

eg {
  "Log in to Canopy": 3,
}

*/

  const query = `
    SELECT 
      a.name,
      q.quota
    FROM goal_level_quota q
    INNER JOIN action_type a
      ON q.action_type_id = a.action_type_id
    WHERE q.goal_level = :goal_level;
  `;

  try {
    const results = await database.query(query, { goal_level });
    const rows = results[0];

    const quotaObject = {};

    for (const row of rows) {
      quotaObject[row.name] = Number(row.quota);
    }

    return quotaObject;
  } catch (err) {
    console.log(err);
    return {};
  }
}
