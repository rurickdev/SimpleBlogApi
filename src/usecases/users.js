
const User = require('../models/users')

function getAll () {
  return User.find()
}

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
  getAll,
  create,
  getById,
  deleteById
}
