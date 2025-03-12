import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    default: user,
    enum: ['user', 'admin'],
    required: true,
    trim:true,
    
  },
  name: {
    type: String,
    
    required: true,
    trim: true,

  },
  email: {
    type: String,
    unique:true,
    required: true,
    trim: true,

  },
  password: {
    type: String,
    
    required: true,
    trim: true,

  },
  avtar: {
    type: String,
    
    trim: true,

  },
  
})

const user = mongoose.model('user', 'userSchema', 'users')

export default user;