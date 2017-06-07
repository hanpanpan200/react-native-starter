import { StackNavigator } from 'react-navigation'
import Home from './components/Home'

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
})

export default AppNavigator
