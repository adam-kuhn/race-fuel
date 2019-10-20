import decode from 'jwt-decode'

import {get, set} from './localStorage'

export const isAuthenticated = () => {
  const token = get('token')
  if (token) {
    const payload = decode(token)
    const expiry = payload.expiry

    if (expiry < new Date().getTime() / 1000) {
      removeUser()
      return false
    }
    return true
  }
  return false
}

export const saveUserToken = (token) => {
  set('token', token)
  return decode(token)
}

export const getUserTokenInfo = () => {
  const token = get('token')
  return token ? decode(token) : null
}

export const removeUser = () => {
  set('token', null)
}
