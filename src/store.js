import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const middlewares = [
  thunk,
]

if (__DEV__) { /* global __DEV__ */
  const { createLogger } = require('redux-logger') // eslint-disable-line
  middlewares.push(createLogger({ collapsed: true }))
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares),
)

export default store
