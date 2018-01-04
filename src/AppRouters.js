import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import LoginContainer from './auth/Login'
import PageA from './navigationExample/PageA'
import PageB from './navigationExample/PageB'
import PageC from './navigationExample/PageC'

import TabIcon from './layout/TabIcon'

const RouterWithRedux = connect()(Router)

const AppRouters = () => (
  <RouterWithRedux>
    <Scene key="root" hideNavBar hideTabBar>
      <Scene key="login" component={LoginContainer} />
      <Scene
        key="tabbar"
        activeTintColor="red"
        inactiveTintColor="blue"
        labelStyle={{ fontSize: 15 }}
        tabs
        hideNavbar
      >
        <Scene
          key="pageA"
          title="PageA"
          tabBarLabel="PageA"
          icon={TabIcon}
          component={PageA}
        />
        <Scene
          key="pageB"
          title="PageB"
          tabBarLabel="PageB"
          icon={TabIcon}
          component={PageB}
        />
        <Scene
          key="pageC"
          title="PageC"
          tabBarLabel="PageC"
          icon={TabIcon}
          component={PageC}
        />
      </Scene>
    </Scene>
  </RouterWithRedux>
)

export default AppRouters
