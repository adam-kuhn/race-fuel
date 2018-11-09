const environment = process.env.NODE_END || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

const createUser = (username, password, testDb) => {
  const db = testDb || knex
  return db('users')
    .insert({
      username,
      hash: password
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

module.exports = {
  createUser,
  doesUserExist
}
