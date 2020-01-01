const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const validator = require('validator')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

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

app.post('/register', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})