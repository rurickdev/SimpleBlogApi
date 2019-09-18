
const express = require('express')

const user = require('../usecases/users')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allUsers = await user.getAll()
    response.json({
      success: true,
      message: 'All users',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      data: {
        error
      }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const gotUser = await user.getById(id)

    response.json({
      success: true,
      message: 'Author Obtained',
      data: {
        post: gotUser
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      data: {
        error
      }
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newUser = await user.create(request.body)

    response.json({
      success: true,
      message: 'User Created',
      data: {
        post: newUser
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      data: {
        error
      }
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedUser = await user.deleteById(id)

    response.json({
      success: true,
      message: 'User deleted',
      data: {
        post: deletedUser
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      data: {
        error
      }
    })
  }
})

module.exports = router
