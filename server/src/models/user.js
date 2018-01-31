import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true }
  // Тут добавите поля типа: замеры, вес, т.д
})

// Check if password correct
userSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

// Hash password with bcrypt
userSchema.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};

// Generate JWT (sign user with secret word from dotenv config)
userSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    {
      email: this.email,
      isAdmin: this.isAdmin
    },
    process.env.JWT_SECRET
  );
};

// Prepare user model for client
userSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    isAdmin: this.isAdmin,
    token: this.generateJWT()
  };
};

export default mongoose.model('User', userSchema)
