const jwt = require('jsonwebtoken')

const db = require('../db/users')

const issue = (req, res) => {
  console.log('issuing')
  db.getUserByName(req.body.username)
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

module.exports = {
  issue
}
