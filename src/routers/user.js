//Sets the route need to make requests to

const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const User = require('../models/user')

router.post('/register', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } 
  catch (e) {
    res.status(400).send(e)
  }
})

router.post('/login', async (req, res) => {
  try{
    const user = await User.authUser(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  }
  catch(e) {
    res.status(400).send()
  }
})

router.post('/logout', auth, async (req, res) => {
  try {
    
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send()
  }
  catch (e) {
    res.status(500).send()
  }
})

router.get('/home', async (req, res) => {
  try {
    res.send(console.log('everyone'))
  } 
  catch (e) {
    res.status(500).send()
  }
})

router.get('/home/user', auth, async (req, res) => {
  try {
    res.send(req.user)
  }
  catch (e) {
    res.status(500).send()
  }
})

module.exports = router