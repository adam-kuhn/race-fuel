const express = require('express')
const router = express.Router()
const crypto = require('../auth/hash')

const userDb = require('../db/users')
const token = require('../auth/token')

const register = (req, res, next) => {
  const {username, password} = req.body
  userDb.doesUserExist(username)
    .then(existStatus => {
      existStatus ? res.status(409).send({message: 'User Exists'})
        : userDb.createUser(username, password)
          .then(() => next())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

router.post('/', register, token.issue)

const signIn = (req, res, next) => {
  userDb.getUserByName(req.body.username)
    .then(user => {
      return crypto.verifyUser(user.hash, req.body.password) ? next() : res.send({message: 'error'})
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'SIGNIN_ERROR'
      })
    })
}

router.post('/signin', signIn, token.issue)

router.get('/', token.decode, (req, res) => {
  res.json({username: req.user.username})
})

module.exports = router
