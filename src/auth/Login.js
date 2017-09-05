import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  login = () => {
    this.props.login({ username: 'FakeUserName', password: 'FakePassword' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.login}>Call Me To Login</Text>
        <Text onPress={Actions.tabbar}>Show Tab</Text>
      </View>
    )
  }
}

export default Login
