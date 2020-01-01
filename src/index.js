const express = require('express')
require('./db/mongoose')
const regRouter = require('./routers/register')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(regRouter)



app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})