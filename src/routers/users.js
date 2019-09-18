
const express = require('express')

const user = require('../usecases/users')

const router = express.Router()

router.get('/:id', async (request, response) => {
  const { id } = request.params

  const gotUser = await user.getById(id)

  response.json({
    success: true,
    message: 'Author Obtained',
    data: {
      post: gotUser
    }
  })
})

router.post('/', async (request, response) => {
  const {
    name,
    email,
    password
  } = request.body

  const newUser = await user.create({
    name,
    email,
    password
  })

  response.json({
    success: true,
    message: 'User Created',
    data: {
      post: newUser
    }
  })
})

router.delete('/:id', async (request, response) => {
  const { id } = request.params

  const deletedUser = await user.deleteById(id)

  response.json({
    success: true,
    message: 'User deleted',
    data: {
      post: deletedUser
    }
  })
})

module.exports = router
