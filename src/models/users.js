
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
    minlength: 5,
    maxlength: 180,
    required: true,
    pattern: /^.+@.+\.+/
  },
  password: {
    type: String,
    minlength: 10,
    maxlength: 200,
    required: true
  }
})

module.exports = mongoose.model('Users', userSchema)
