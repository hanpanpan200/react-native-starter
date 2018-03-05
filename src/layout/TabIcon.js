import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Entypo'

const TabIcon = ({ focused, selectedIcon, unSelectedIcon }) => (
  <Icon
    name={focused ? selectedIcon : unSelectedIcon}
    style={{ color: focused ? 'red' : 'black' }}
    size={20}
  />
)

TabIcon.propTypes = {
  focused: PropTypes.bool,
  selectedIcon: PropTypes.string.isRequired,
  unSelectedIcon: PropTypes.string.isRequired,
}

TabIcon.defaultProps = {
  focused: false,
}

export default TabIcon
