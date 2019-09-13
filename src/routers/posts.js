
const express = require('express')

const post = require('../usecases/post')

const router = express.Router()

router.get('/', async (request, response) => {
  const allPosts = await post.getAll()

  response.json({
    success: true,
    message: 'Post deleted',
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

module.exports = router
