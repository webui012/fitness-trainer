import express from 'express';
import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  user: {
  	 _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: String,
    password1: String,
    password2: String,
    currentUserRole: String,
    signIn: Boolean,
  }
});
  export default mongoose.model('User', userSchema, 'user');

