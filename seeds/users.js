exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test-user', hash: '123456'},
        {id: 2, username: 'abc', hash: '123'}
      ])
    })
}
