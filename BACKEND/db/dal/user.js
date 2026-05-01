import database from "../databaseConnection";
import bcrypt from "bcrypt";
const saltRounds = 12;

export async function getUserById(id) {
  let sqlQuery = `
		SELECT * FROM user
        WHERE user_id = :id;
	`;

  let params = {
    id,
  };

  try {
    const results = await database.query(sqlQuery, params);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from user table");
    console.log(err);
    return null;
  }
}

export async function verifyUserCredentials(email, password) {
  const user = await getUserByEmail(email);
  if (!user) return null;

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) return null;

  return user;
}

export async function getUserByEmail(email) {
  let sqlQuery = `
		SELECT * FROM user
        WHERE email = :email;
	`;

  let params = {
    email,
  };

  try {
    const results = await database.query(sqlQuery, params);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from user table");
    console.log(err);
    return null;
  }
}

export async function addUser(postData) {
  let hashedPassword = await bcrypt.hash(postData.password, saltRounds);
  let sqlInsertUser = `
INSERT INTO user (first_name, last_name, email, password_hash, phone_number)
VALUES (:first_name, :last_name, :email, :hashedPassword, :phone_number);
`;
  let params = {
    first_name: postData.first_name,
    last_name: postData.last_name,
    email: postData.email,
    hashedPassword: hashedPassword,
    phone_number: postData.phone_number,
  };
  console.log(sqlInsertUser);
  try {
    const results = await database.query(sqlInsertUser, params);
    let insertedID = results[0].insertId;
    console.log("Inserted new user with ID:");
    console.log(insertedID);
    return { success: true, insertedID };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function deleteUser(webUserId) {
  let sqlDeleteUser = `
DELETE FROM user
WHERE user_id = :userID
`;
  let params = {
    userID: webUserId,
  };
  console.log(sqlDeleteUser);
  try {
    await database.query(sqlDeleteUser, params);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
