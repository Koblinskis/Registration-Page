//Defines what is requried to make a user document in the server

const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)){
        throw new Error('Email is Invalid')
      }
    }
  },
  
  password: {
    type: String,
    required: true,
    minlength: 6
  }
})

module.exports = User