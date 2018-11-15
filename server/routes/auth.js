const express = require('express')
const router = express.Router()

const userDb = require('../db/users')
const token = require('../auth/token')

const register = (req, res, next) => {
  console.log('here')
  const {username, password} = req.body
  console.log(username)
  userDb.doesUserExist(username)
    .then(existStatus => {
      existStatus ? res.status(400).send({message: 'User Exists'})
        : userDb.createUser(username, password)
          .then(() => next())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

router.post('/', register, token.issue)

const signIn = (req, res, next) => {
  console.log(req.body.loginDetails)
  // const loginDetails = req.body.loginDetails
  userDb.getUserByName(req.body.loginDetails.username)
    .then(user => {
      console.log(user)
      return user ? next() : res.send({message: 'error'})
    })
}

router.post('/signin', signIn, token.issue)

router.get('/', token.decode, (req, res) => {
  res.json({username: req.user.username})
})

module.exports = router
