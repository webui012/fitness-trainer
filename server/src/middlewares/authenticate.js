import jwt from "jsonwebtoken";
import User from "../models/user";

// Middleware for authenticate user via JWT
export default (req, res, next) => {
  const header = req.headers.authorization;
  let token;

  // Get token from header
  if (header) token = header.split(" ")[1];

  if (token) {
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ errors: "Invalid token" });
      } else {
        User.findOne({ email: decoded.email }).then(user => {
          req.currentUser = user;
          next();
        });
      }
    });
  } else {
    res.status(401).json({ errors: { global: "No token" } });
  }
};
