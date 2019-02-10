import {RECIEVED_LOGIN, ERROR_LOGIN, LOG_OUT} from '../actions/auth'

const initialState = {
  loggedIn: false,
  userInfo: {},
  error: false
}

const authReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case (RECIEVED_LOGIN): {
      return {
        ...state,
        loggedIn: true,
        userInfo: action.userInfo
      }
    }
    case (ERROR_LOGIN): {
      return {
        ...state,
        error: true
      }
    }
    case (LOG_OUT): {
      console.log('okkkkk')
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
