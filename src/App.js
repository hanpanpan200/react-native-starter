import React from 'react'
import { Provider } from 'react-redux'
import AppRouters from './AppRouters'
import store from './store'

const App = () => (
  <Provider store={store}>
    <AppRouters />
  </Provider>
)

export default App
