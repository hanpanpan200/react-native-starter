import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import AppRouters from './src/AppRouters'
import store from './src/store'

const ReactNativeStarter = () => (
  <Provider store={store}>
    <AppRouters />
  </Provider>
)

export default ReactNativeStarter

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter)
