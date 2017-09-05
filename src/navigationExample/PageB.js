import React from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const PageB = () => (
  <View>
    <Text onPress={Actions.pageC}>Go to PageC</Text>
  </View>
)
export default PageB
