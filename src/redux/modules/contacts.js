import api from '../../utils/api'
import apiConfig from '../../config/apiConfig'

const REQUEST_LIST = 'LIST/REQUEST'
const REQUEST_LIST_SUCCESS = 'LIST/REQUEST_LIST_SUCCESS'
const REQUEST_LIST_FAILED = 'LIST/REQUEST_LIST_FAILED'

const initialState = {
  loading: false,
  list: [],
}

function requestList() {
  return {
    type: REQUEST_LIST,
  }
}

function getListSuccess(list) {
  return {
    type: REQUEST_LIST_SUCCESS,
    payload: list,
  }
}

function getListFailed(message) {
  return {
    type: REQUEST_LIST_FAILED,
    payload: message,
  }
}

export function getList() {
  return dispatch => {
    dispatch(requestList())
    const url = `${apiConfig.API_HOST}/classes/contact?limit=10&&order=-updatedAt`
    api.get(url).then(res => {
      dispatch(getListSuccess(res.data.results))
    }).catch(e => {
      dispatch(getListFailed(e.errorData))
    })
  }
}

const list = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_LIST:
    return {
      ...state,
      loading: true,
    }
  case REQUEST_LIST_SUCCESS:
    return {
      ...state,
      loading: false,
      list: action.payload,
    }
  case REQUEST_LIST_FAILED:
    return {
      ...state,
      loading: false,
    }
  default:
    return state
  }
}

export default list
