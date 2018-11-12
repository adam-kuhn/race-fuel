import request from 'superagent'

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerSucess = (res) => {
  console.log('res', res)
  return {
    type: REGISTER_SUCCESS
  }
}

export const registerError = (res) => {
  console.log('error', res)
  return {
    type: REGISTER_ERROR
  }
}
export const registerUser = (dispatch) => {
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
