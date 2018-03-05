import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { login } from './auth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Login extends Component {
  login = () => {
    this.props.login({ username: 'FakeUserName', password: 'FakePassword' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.login}>Fake Login Action</Text>
      </View>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  message: state.message,
})

export default connect(mapStateToProps, { login })(Login)

