import api from '../api/api'

const AUTH_REQUEST_LOGIN = 'AUTH/REQUEST_LOGIN'
const AUTH_LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS'
const AUTH_LOGIN_FAILED = 'AUTH/LOGIN_FAILED'

const authInitialState = {}

const auth = (state = authInitialState, action) => {
  switch (action.type) {
  case AUTH_REQUEST_LOGIN:
    return {
      ...state,
    }
  default:
    return {
      ...state,
    }
  }
}

function requestLogin() {
  return {
    type: AUTH_REQUEST_LOGIN,
  }
}

function loginSuccess() {
  return {
    type: AUTH_LOGIN_SUCCESS,
  }
}

function loginFailed(error) {
  return {
    type: AUTH_LOGIN_FAILED,
    payload: error,
  }
}

export function login(params) {
  const { username, password } = params

  return dispatch => {
    dispatch(requestLogin())
    return api.post('/login', {
      username: username,
      password: password,
    }).then(() => {
      dispatch(loginSuccess())
    }).catch(error => {
      dispatch(loginFailed(error.errorData))
    })
  }
}

export default auth
