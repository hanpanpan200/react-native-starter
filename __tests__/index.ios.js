import 'react-native'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import React from 'react'
import Index from '../index.ios'

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />,
  )
})
