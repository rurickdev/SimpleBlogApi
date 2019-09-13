
const express = require('express')

const router = require('./routers/posts')

const app = express()

app.use(express.json())

app.use('/posts', router)

app.get('/', (request, response) => {
  response.json({
    message: 'Hola Mundo'
  })
})

module.exports = app
