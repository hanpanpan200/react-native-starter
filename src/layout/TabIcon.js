import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLOR } from '../constants/theme'

const styles = StyleSheet.create({
  icon: {
    height: 28,
    width: 28,
    fontSize: 26,
  },
  focused: {
    color: COLOR.BLUE,
  },
  unfocused: {
    color: 'gray',
  },
})

const TabIcon = ({ focused, selectedIcon, unSelectedIcon }) => (
  <Icon
    name={focused ? selectedIcon : unSelectedIcon}
    style={[styles.icon, focused ? styles.focused : styles.unfocused]}
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
