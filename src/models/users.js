
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 25,
    required: true
  },
  email: {
    type: String,
    minlength: 6,
    maxlength: 180,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  }
})

module.exports = mongoose.model('Users', userSchema)
