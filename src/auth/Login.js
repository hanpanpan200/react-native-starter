import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  login = () => {
    this.props.login()
  }

  render() {
    return (
      <View>
        <Text onPress={this.login}>Login</Text>
      </View>
    )
  }
}

export default Login
