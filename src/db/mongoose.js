//Connects app to the server

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/registration', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})