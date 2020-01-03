//Starts the server up

const express = require('express')
require('./db/mongoose')
const regRouter = require('./routers/register')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(regRouter)



app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})