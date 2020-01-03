//Sets the route need to make requests to

const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/register', async (req, res) => {
  console.log('testing')
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } 
  catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router