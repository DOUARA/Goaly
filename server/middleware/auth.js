const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  // Get Token from Header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json([{ msg: "No Token, Authorization Denied" }]);
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json([{ msg: "Invalid Token" }]);
  }
};
