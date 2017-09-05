import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Entypo'

const TabIcon = ({ focused }) => (
  <Icon name="500px" style={{ color: focused ? 'red' : 'black' }} size={20} />
)

TabIcon.propTypes = {
  focused: PropTypes.bool,
}

TabIcon.defaultProps = {
  focused: false,
}

export default TabIcon
