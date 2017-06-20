import { connect } from 'react-redux'
import Login from './Login'
import { login } from './auth'

const mapStateToProps = state => ({
  message: state.message,
})

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer
