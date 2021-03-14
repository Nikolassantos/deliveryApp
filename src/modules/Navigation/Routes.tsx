import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import AppWrapper from '../AppWrapper'
import Login from '../Login'
import React from 'react'
import routesEnum from './enum'

const Stack = createStackNavigator()

const styleView = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: {},
}

const styleForModal = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  cardStyle: {},
}

const noHeaderNavigationOptions = {
  header: () => null,
}

const defaultScreenOptions = {
  ...styleView,
  ...noHeaderNavigationOptions,
}

const defaultModalOptions = {
  ...styleForModal,
  ...noHeaderNavigationOptions,
}

function StackNavigation() {
  return (
    <AppWrapper>
      <Stack.Navigator initialRouteName={routesEnum.LOGIN}>
        <Stack.Screen
          name={routesEnum.LOGIN}
          options={{ ...defaultScreenOptions }}
          component={Login}
        />
      </Stack.Navigator>
    </AppWrapper>
  )
}

export default StackNavigation
