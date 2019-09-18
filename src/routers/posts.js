
const express = require('express')

const post = require('../usecases/post')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allPosts = await post.getAll()

    response.json({
      success: true,
      message: 'All Posts',
      data: {
        posts: allPosts
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
    const newPost = await post.create(request.body)

    response.json({
      success: true,
      message: 'Post Created',
      data: {
        post: newPost
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

    const deletedPost = await post.deleteById(id)

    response.json({
      success: true,
      message: 'Post deleted',
      data: {
        post: deletedPost
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const updatedPost = await post.updateById(id, request.body)

    response.json({
      success: true,
      message: 'Post Updated',
      data: {
        post: updatedPost
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
