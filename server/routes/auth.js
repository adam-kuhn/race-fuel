const express = require('express')
const router = express.Router()

const userDb = require('../db/users')

const register = (req, res) => {
  console.log('here')
  const {username, password} = req.body
  console.log(username)
  userDb.doesUserExist(username)
    .then(existStatus => {
      if (existStatus) {
        return res.status(400).send({message: 'User Exists'})
      } else {
        userDb.createUser(username, password)
          .then(() => res.status(201).end())
      }
    })
}

router.post('/', register)

module.exports = router
