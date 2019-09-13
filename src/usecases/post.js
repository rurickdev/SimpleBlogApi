
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

module.exports = {
  create
}
