import React from 'react'
import { Tabs, Scene, Router } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Blank from './layout/Blank'
import TabIcon from './layout/TabIcon'
import { COLOR, FONT } from './constants/theme'

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: COLOR.BLUE,
  },
  titleStyle: {
    fontSize: FONT.FONT_20,
    color: COLOR.WHITE,
    alignSelf: 'center',
  },
})

const NAV_BAR_STYLE = {
  navigationBarStyle: styles.navigationBarStyle,
  titleStyle: styles.titleStyle,
}

const RouterWithRedux = connect()(Router)

const AppRouters = () => (
  <RouterWithRedux>
    <Scene key="root">
      <Tabs key="tabs" tabBarPosition="bottom" showLabel={false}>
        <Scene
          key="list"
          title="List"
          icon={props => <TabIcon focused={props.focused} selectedIcon="list-alt" unSelectedIcon="list-alt" />}
          component={Blank}
          {...NAV_BAR_STYLE}
        />
        <Scene
          key="music"
          title="Music"
          icon={props => <TabIcon focused={props.focused} selectedIcon="music" unSelectedIcon="music" />}
          component={Blank}
          {...NAV_BAR_STYLE}
        />
        <Scene
          key="me"
          title="Me"
          icon={props => <TabIcon focused={props.focused} selectedIcon="user" unSelectedIcon="user-o" />}
          component={Blank}
          {...NAV_BAR_STYLE}
        />
      </Tabs>
    </Scene>
  </RouterWithRedux>
)

export default AppRouters
