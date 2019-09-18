
const jsonwebtoken = require('jsonwebtoken')

const {
  JWT_SECRET_WORD
} = process.env

function sign (payload) {
  return jsonwebtoken(payload, JWT_SECRET_WORD)
}

function verify (token) {
  jsonwebtoken.verify(token, JWT_SECRET_WORD)
}

module.exports = {
  sign,
  verify
}
