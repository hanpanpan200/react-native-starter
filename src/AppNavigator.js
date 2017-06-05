import { StackNavigator } from 'react-navigation'
import Splash from './components/Splash'

const AppNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      title: 'Splash Screen',
    },
  },
})

export default AppNavigator
