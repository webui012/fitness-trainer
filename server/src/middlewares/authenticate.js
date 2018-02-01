import jwt from "jsonwebtoken";
import User from "../models/user";

// Middleware for authenticate user via JWT
export default (req, res, next) => {
  if (req.method !== "OPTIONS") {
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
          // Find user with email from decoded token
          User.findOne({ email: decoded.email }).then(user => {
            // Set current user to that user
            req.currentUser = user;
            next();
          });
        }
      });
    } else {
      // If there is any token exists
      res.status(401).json({ errors: { global: "No token" } });
    }
  } else {
    next();
  }
};
