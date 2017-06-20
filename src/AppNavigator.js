import { StackNavigator } from 'react-navigation'
import LoginContainer from './auth/LoginContainer'

const AppNavigator = StackNavigator({
  Contacts: {
    screen: LoginContainer,
    navigationOptions: {
      title: 'Login',
    },
  },
})

export default AppNavigator
