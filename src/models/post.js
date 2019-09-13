
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 180,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  },
  readTime: {
    type: Number,
    min: 1,
    required: true
  },
  image: {
    type: String,
    default: '',
    required: false
  }
})

module.exports = mongoose.model('Posts', postSchema)
