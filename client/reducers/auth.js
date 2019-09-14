import {RECIEVED_LOGIN, LOGIN_ERROR, LOG_OUT} from '../actions/auth'

const initialState = {
  loggedIn: false,
  userInfo: {},
  error: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case (RECIEVED_LOGIN): {
      return {
        ...state,
        loggedIn: true,
        userInfo: action.userInfo,
        error: false
      }
    }
    case (LOGIN_ERROR): {
      return {
        ...state,
        error: true
      }
    }
    case (LOG_OUT): {
      return {
        loggedIn: false,
        userInfo: {},
        error: false
      }
    }
    default:
      return state
  }
}

export default authReducer
