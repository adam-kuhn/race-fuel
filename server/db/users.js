const environment = process.env.NODE_END || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)
const hash = require('../auth/hash')

const createUser = (username, password, testDb) => {
  const passwordHash = hash.generate(password)
  const db = testDb || knex
  return db('users')
    .insert({
      username,
      hash: passwordHash
    })
}

const doesUserExist = (username, testDb) => {
  const db = testDb || knex
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

const getUserByName = (username, testDb) => {
  console.log(username)
  const db = testDb || knex
  return db('users')
    .select()
    .where('username', username)
    .first()
}

module.exports = {
  createUser,
  doesUserExist,
  getUserByName
}
