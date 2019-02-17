import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import history from '../lib/history'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const RECIEVED_LOGIN = 'RECIEVED_LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOG_OUT = 'LOG_OUT'

export const registerSucess = (res) => {
  return {
    type: REGISTER_SUCCESS
  }
}

export const registerError = (res) => {
  return {
    type: REGISTER_ERROR
  }
}

const recieveLogin = (userInfo) => {
  history.push('/')
  return {
    type: RECIEVED_LOGIN,
    userInfo
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT
  }
}

const loginError = () => {
  return {
    type: LOGIN_ERROR
  }
}

export const registerUser = () => {
  return dispatch => {
    request
      .post('/api/v1/auth')
      .set('Content-Type', 'application/json')
      .send({username: 'keep at it', password: '2'})
      .then(res => dispatch(registerSucess(res))
      )
      .catch(err => dispatch(registerError(err.response.body.message)))
  }
}

export const requestLogin = (loginDetails) => {
  return dispatch => {
    request
      .post('/api/v1/auth/signin')
      .set('Content-Type', 'application/json')
      .send(loginDetails)
      .then(res => {
        if (res.ok) {
          const userInfo = saveUserToken(res.body.token)
          dispatch(recieveLogin(userInfo))
        }
      })
      .catch(() => {
        dispatch(loginError())
      })
  }
}
