
const Post = require('../models/post')

function create ({ title, date, readTime, description, author, image }) {
  const newPost = new Post({
    title,
    description,
    author,
    date,
    readTime,
    image
  })

  return newPost.save()
}

function getAll () {
  const allPosts = Post.find()
  return allPosts
}

module.exports = {
  create,
  getAll
}
