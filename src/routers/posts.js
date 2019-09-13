
const express = require('express')

const post = require('../usecases/post')

const router = express.Router()

router.get('/', async (request, response) => {
  const allPosts = await post.getAll()

  response.json({
    success: true,
    message: 'All Posts',
    data: {
      posts: allPosts
    }
  })
})

router.post('/', async (request, response) => {
  const {
    title,
    description,
    author,
    date,
    readTime,
    image
  } = request.body

  const newPost = await post.create({
    title,
    description,
    author,
    date,
    readTime,
    image
  })

  response.json({
    success: true,
    message: 'Post Created',
    data: {
      post: newPost
    }
  })
})

router.delete('/:id', async (request, response) => {
  const { id } = request.params

  const deletedPost = await post.deleteById(id)

  response.json({
    success: true,
    message: 'Post deleted',
    data: {
      post: deletedPost
    }
  })
})

router.patch('/:id', async (request, response) => {
  const { id } = request.params
  const {
    title,
    description,
    author,
    date,
    readTime,
    image
  } = request.body

  const updatedPost = await post.updateById(id, {
    title,
    description,
    author,
    date,
    readTime,
    image
  })

  response.json({
    success: true,
    message: 'Post Updated',
    data: {
      post: updatedPost
    }
  })
})

module.exports = router
