
const Post = require('../models/post')

function create ({ title, date, readTime, description, author, image }) {
  return Post.create({
    title,
    description,
    author,
    date,
    readTime,
    image
  })
}

function getAll () {
  return Post.find()
}

async function deleteById (id) {
  const post = await Post.findById(id)
  return Post.deleteOne(post)
}

async function updateById (id, { title, date, readTime, description, author, image }) {
  const post = await Post.findById(id)
  return Post.updateOne(post, {
    title,
    date,
    readTime,
    description,
    author,
    image
  })
}

module.exports = {
  create,
  getAll,
  deleteById,
  updateById
}
