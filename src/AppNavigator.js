import { StackNavigator } from 'react-navigation'
import ContactsContainer from './containers/ContactsContainer'

const AppNavigator = StackNavigator({
  Contacts: {
    screen: ContactsContainer,
    navigationOptions: {
      title: 'Contacts',
    },
  },
})

export default AppNavigator
