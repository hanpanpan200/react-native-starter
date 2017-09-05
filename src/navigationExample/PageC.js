import React from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const PageC = () => (
  <View>
    <Text onPress={Actions.pageA}>Go to PageA</Text>
  </View>
)
export default PageC
