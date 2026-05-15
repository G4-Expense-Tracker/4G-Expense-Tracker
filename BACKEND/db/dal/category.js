import database from "../databaseConnection.js";

export async function addCategory(postData) {
  const query = `
    INSERT INTO category (name, icon_id)
    VALUES (:name, :icon_id);
    `;

  //   postData MUST HAVE:
  //     name,
  //     icon_id

  try {
    const results = await database.query(query, postData);

    const result = results[0];
    const category_id = result.insertId;

    return { success: true, category_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function getCategoryById(category_id) {
  const query = `
    SELECT * from category
    WHERE category_id = :category_id;
    `;

  try {
    const results = await database.query(query, { category_id });
    const rows = results[0];
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    console.log("Error selecting from category table");
    console.log(err);
    return null;
  }
}

export async function editCategory(category_id, postData) {
  const query = `
    UPDATE category
        SET name = :name, 
        icon_id = :icon_id
    WHERE category_id = :category_id;
    `;

  //   postData MUST HAVE:
  //     name,
  //     icon_id

  postData.category_id = category_id;

  try {
    const results = await database.query(query, postData);

    const affectedRows = results[0].affectedRows;

    if (affectedRows === 0) {
      return { success: false, message: "Category not found" };
    }

    return { success: true, category_id };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function deleteCategory(category_id) {
  let query = `
    DELETE FROM category
    WHERE category_id = :category_id;
    `;

  let params = {
    category_id,
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
