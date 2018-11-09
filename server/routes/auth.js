const express = require('express')
const router = express.Router()

const userDb = require('../db/users')

const register = (req, res) => {
  console.log('here')
  const {username, password} = req.body
  userDb.doesUserExist(username)
    .then(existStatus => {
      existStatus ? res.status(400).send({message: 'User Exists'})
        : userDb.createUser(username, password)
          .then(() => res.status(201).end())
    })
}

router.post('/', register)

module.exports = router
