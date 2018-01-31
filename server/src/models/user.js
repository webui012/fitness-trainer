import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
<<<<<<< HEAD
  email: { type: String, unique: false },
  currentUserRole: { type: String, unique: false },
  local: {
    username: { type: String, unique: false, required: false },
    password1: { type: String, unique: false, required: false }
  }, 
  userAvatar: { type: String, default: null },
  userPesonalData: {
    name: {
      type: String,
      maxlength: 30,
    },
    surname: {
      type: String,
      maxlength: 30,
    },
    birth: {
      type: String,
      maxlength: 12,
    },
    height: {
      type: Number,
      min: 130,
      max: 300,
    },
    weight: {
      type: Number,
      min: 45,
      max: 250,
    },
  },
  userAims: {
    type: String,
  },
  userMetrics: {
    biceps: {
      type: Number,
      min: 10,
      max: 60,
    },
    buttocks: {
      type: Number,
      min: 50,
      max: 200,
    },
    shin: {
      type: Number,
      min: 25,
      max: 50,
    },
    neck: {
      type: Number,
      min: 15,
      max: 50,
    },
    breast: {
      type: Number,
      min: 45,
      max: 250,
    },
    tail: {
      type: Number,
      min: 45,
      max: 200,
    },
    hips: {
      type: Number,
      min: 45,
      max: 250,
    },
  },
  userContraindications: {
    type: String,
    maxlength: 300,
  },
},
{
  versionKey: false,
});

export default mongoose.model('User', userSchema, 'users')
=======
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

export default mongoose.model('User', userSchema, 'usersJWT')
>>>>>>> server-dev
