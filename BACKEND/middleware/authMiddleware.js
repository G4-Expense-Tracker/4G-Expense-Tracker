export function requireLogin(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ error: "Please log in to access this feature" });
  }
  next();
}

export function requireLogout(req, res, next) {
  if (req.session && req.session.userId) {
    return res.status(403).json({ error: "Already logged in." });
  }
  next();
}