import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'

export default class Contacts extends Component {
  static propTypes = {
    getList: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <View />
    )
  }
}
