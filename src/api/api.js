import axios from 'axios'
import ApiHost from '../config/apiConfig'

const api = axios.create({
  'baseURL': ApiHost,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

function handleResponseError(error) {
  const serverError = { ...error, errorData: {} }
  // Handle server erorr
  if (serverError.response) {
    if (serverError.response.status >= 500) {
      serverError.errorData = { message: 'Server Error' }
    } else {
      serverError.errorData = {
        message: serverError.response.data.message,
      }
    }
    return Promise.reject(serverError)
  }
  // Handler network error
  if (error.message === 'Network Error') {
    serverError.errorData = { message: 'Network Error' }
  }
  return Promise.reject(serverError)
}

api.interceptors.response.use(response => response, error => handleResponseError(error))

export default api
