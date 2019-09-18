
const User = require('../models/users')

function create ({ name, email, password }) {
  return User.create({
    name,
    email,
    password
  })
}

function getById (id) {
  return User.findById(id)
}

async function deleteById (id) {
  const user = await User.findById(id)
  return User.deleteOne(user)
}

module.exports = {
  create,
  getById,
  deleteById
}
