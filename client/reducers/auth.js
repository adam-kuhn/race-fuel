import {RECIEVED_LOGIN, ERROR_LOGIN} from '../actions/auth'

const initialState = {
  loggedIn: false,
  userInfo: {},
  error: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case (RECIEVED_LOGIN): {
      return {
        loggedIn: true,
        userInfo: action.userInfo
      }
    }
    case (ERROR_LOGIN): {
      return {
        error: true
      }
    }
    default:
      return {
        state
      }
  }
}

export default authReducer
