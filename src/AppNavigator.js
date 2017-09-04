import { StackNavigator } from 'react-navigation'
import LoginContainer from './auth/LoginContainer'

const AppNavigator = StackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      title: 'Login',
    },
  },
})

export default AppNavigator
