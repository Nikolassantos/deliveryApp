import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'
import { RootSiblingParent } from 'react-native-root-siblings'
import StackNavigation from './src/modules/Navigation/Routes'
import { navigationRef } from './src/modules/shared/util/navigationRoot'

export default function App() {
  const Wrapper = Platform.OS === 'ios' ? React.Fragment : RootSiblingParent

  return (
    <Wrapper>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </Wrapper>
  )
}
