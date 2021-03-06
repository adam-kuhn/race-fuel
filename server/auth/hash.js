const sodium = require('sodium').api

const generate = (password) => {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
}

const verifyUser = (hash, password) => {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str_verify(hash, passwordBuffer)
}

module.exports = {
  generate,
  verifyUser
}
