import React from 'react'
import { StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import LoginContainer from './auth/Login'
import PageA from './navigationExample/PageA'
import PageB from './navigationExample/PageB'
import PageC from './navigationExample/PageC'

import TabIcon from './layout/TabIcon'

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 15,
  },
})

const RouterWithRedux = connect()(Router)

const AppRouters = () => (
  <RouterWithRedux>
    <Scene key="root">
      <Scene
        key="tabbar"
        activeTintColor="red"
        inactiveTintColor="blue"
        labelStyle={styles.labelStyle}
        tabs
        hideNavBar
      >
        <Scene
          key="pageA"
          title="Page A"
          tabBarLabel="PageA"
          icon={props => (
            <TabIcon
              focused={props.focused}
              selectedIcon="emoji-neutral"
              unSelectedIcon="emoji-neutral"
            />
          )}
          component={PageA}
        />
        <Scene
          key="pageB"
          title="PageB"
          tabBarLabel="PageB"
          icon={props => (
            <TabIcon
              focused={props.focused}
              selectedIcon="emoji-flirt"
              unSelectedIcon="emoji-flirt"
            />
          )}
          component={PageB}
        />
        <Scene
          key="pageC"
          title="PageC"
          tabBarLabel="PageC"
          icon={props => (
            <TabIcon
              focused={props.focused}
              selectedIcon="emoji-happy"
              unSelectedIcon="emoji-happy"
            />
          )}
          component={PageC}
        />
      </Scene>
      <Scene
        key="login"
        title="Login"
        component={LoginContainer}
      />
    </Scene>
  </RouterWithRedux>
)

export default AppRouters
