
const express = require('express')

const post = require('../usecases/post')

const router = express.Router()

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
