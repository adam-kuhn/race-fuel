const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const db = require('../db/users')

const issue = (req, res) => {
  console.log('issuing')
  db.getUserByName(req.body.loginDetails.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authenication successful.',
        token
      })
    })
}

const createToken = (user, secret) => {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

const decode = (req, res, next) => {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

const getSecret = (req, payload, done) => {
  done(null, process.env.JWT_SECRET)
}

module.exports = {
  issue,
  decode
}
