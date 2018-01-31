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
})

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};

userSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    {
      email: this.email,
      isAdmin: this.isAdmin
    },
    process.env.JWT_SECRET
  );
};

userSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    isAdmin: this.isAdmin,
    token: this.generateJWT()
  };
};

export default mongoose.model('User', userSchema)
