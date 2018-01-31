const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  email: { type: String, unique: false },
  currentUserRole: { type: String, unique: false },
  local: {
    username: { type: String, unique: false, required: false },
    password1: { type: String, unique: false, required: false }
  }
})

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password1);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 12);
  }
}

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
  if (!this.local.password1) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    this.local.password1 = this.hashPassword(this.local.password1);
    next()
  }
})

// Create reference to User & export
const User = mongoose.model('User', userSchema);

module.exports = User
