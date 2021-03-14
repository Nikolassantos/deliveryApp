import { StatusBar } from 'react-native'
import { AppWrapperView } from './styles'
import IProps from './types'
import React from 'react'

function AppWrapper({ children }: IProps) {
  return (
    <AppWrapperView>
      <StatusBar translucent backgroundColor="transparent" />
      {children}
    </AppWrapperView>
  )
}

export default AppWrapper
