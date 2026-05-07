import { getUserById } from "../db/dal/user.js";

export async function requireLogin(req, res, next) {
  try {
    if (!req.session?.userId) {
      return res.status(401).json({ error: 'Please log in to access this feature'})
    }

    const user = await getUserById(req.session.userId)

    if (!user) {
      req.session.userId = null;
      return res.status(401).json({ error: "User no longer exists" });
    }

    req.user = user;

    next();
  } catch(err) {
    console.error(err)
    return res.status(500).json({error: 'Failed to '})
  }
}

export function requireLogout(req, res, next) {
  if (req.session?.userId) {
    return res.status(403).json({ error: "Already logged in." });
  }
  next();
}