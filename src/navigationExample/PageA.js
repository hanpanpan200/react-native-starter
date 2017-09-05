import React from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const PageA = () => (
  <View>
    <Text onPress={Actions.pageB}>Go to PageB</Text>
  </View>
)
export default PageA
