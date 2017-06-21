import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
